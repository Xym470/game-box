"use client"

import { useEffect, useState } from "react"
import { useGameStore } from "@/lib/store/game-store"
import * as gamesApi from "@/app/api/games"
import type { Game } from "@/types/game"

// 这个组件用于初始化和管理游戏数据缓存
export function CacheInitializer({ initialGames = [] }: { initialGames?: Game[] }) {
  const { 
    games, 
    setGames, 
    isCacheExpired, 
    isLoading, 
    setLoading 
  } = useGameStore()
  const [initialized, setInitialized] = useState(false)
  
  // 初始化缓存
  useEffect(() => {
    const initializeCache = async () => {
      // 如果已经初始化过，则不再执行
      if (initialized) return;
      
      // 如果有初始数据且缓存已过期或为空，则使用初始数据
      if (initialGames.length > 0 && (isCacheExpired() || games.length === 0)) {
        setGames(initialGames);
        setInitialized(true);
        return;
      }
      
      // 如果缓存已过期或为空，且没有初始数据，则从API获取
      if ((isCacheExpired() || games.length === 0) && initialGames.length === 0) {
        setLoading(true);
        try {
          const response = await gamesApi.getGames();
          
          // 确保返回的数据是数组
          let allGames: Game[] = [];
          if (Array.isArray(response)) {
            allGames = response;
          } else if (response && typeof response === 'object' && Array.isArray(response.data)) {
            allGames = response.data;
          } else {
            console.error('获取游戏数据失败：返回格式错误', response);
            setLoading(false);
            setInitialized(true);
            return;
          }
          
          if (allGames.length > 0) {
            setGames(allGames);
            console.log('游戏数据已缓存，共', allGames.length, '个游戏');
          } else {
            console.error('获取游戏数据失败：返回的数组为空');
          }
        } catch (error) {
          console.error('获取游戏数据失败:', error);
        } finally {
          setLoading(false);
          setInitialized(true);
        }
      } else {
        // 缓存未过期，标记为已初始化
        setInitialized(true);
      }
    };
    
    initializeCache();
  }, [initialGames, games.length, isCacheExpired, setGames, setLoading, initialized]);
  
  // 这个组件不渲染任何内容
  return null;
} 