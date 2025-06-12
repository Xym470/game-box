"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { useGameStore } from "@/lib/store/game-store"
import { CacheInitializer } from "@/components/cache-initializer"
import { getGameById } from "@/app/api/games"
import type { Game } from "@/types/game"
import { Loader2 } from "lucide-react"

export default function GameDetailPage() {
  const params = useParams()
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : Array.isArray(params.id) ? parseInt(params.id[0], 10) : 0
  
  const [game, setGame] = useState<Game | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const { games, getGameById: getGameFromCache } = useGameStore()
  
  useEffect(() => {
    // 尝试从缓存获取游戏数据
    const fetchGameData = async () => {
      setLoading(true)
      setError(null)
      
      // 首先尝试从缓存中获取
      if (games.length > 0) {
        const cachedGame = getGameFromCache(id)
        if (cachedGame) {
          setGame(cachedGame)
          setLoading(false)
          return
        }
      }
      
      // 缓存中没有，从API获取
      try {
        const response = await getGameById(id)
        
        // 处理不同的响应格式
        let gameData: Game | null = null
        
        if (response && typeof response === 'object') {
          if ('data' in response && response.data) {
            // 处理 { data: { data: Game } } 格式
            if ('data' in response.data && response.data.data) {
              gameData = response.data.data
            } 
            // 处理 { data: Game } 格式
            else {
              gameData = response.data
            }
          } 
          // 直接就是 Game 对象
          else {
            gameData = response as unknown as Game
          }
        }
        
        if (gameData && gameData.id) {
          setGame(gameData)
        } else {
          setError("游戏不存在或数据格式错误")
        }
      } catch (err) {
        console.error("获取游戏详情失败:", err)
        setError("获取游戏信息时出错，请稍后再试")
      } finally {
        setLoading(false)
      }
    }
    
    fetchGameData()
  }, [id, games, getGameFromCache])
  
  // 加载中状态
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <CacheInitializer />
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">正在加载游戏详情...</p>
        </div>
      </div>
    )
  }
  
  // 错误状态
  if (error || !game) {
    return (
      <div className="container mx-auto px-4 py-8">
        <CacheInitializer />
        <h1 className="text-3xl font-bold mb-4">游戏加载失败</h1>
        <p>{error || "未找到游戏"}</p>
      </div>
    )
  }
  
  // 处理兼容性问题
  const gameTitle = game.name || game.title || '';
  const gameImage = game.cover || game.logo || '/placeholder.svg';
  const gameDesc = game.description || '';
  const gameCategory = game.category || game.genre || '';
  const gameUrl = game.url || game.gameUrl || '';
  const gameDate = game.createTime || game.releaseDate;
  const gameViews = game.playCount || game.views || 0;
  const gameIntro = game.gameIntroduction || gameDesc;

  return (
    <div className="container mx-auto px-4 py-8">
      <CacheInitializer />
      <div className="max-w-4xl mx-auto">
        {/* 游戏标题 */}
        <h1 className="text-3xl font-bold mb-4">{gameTitle}</h1>

        {/* 游戏封面 */}
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <Image
            src={gameImage}
            alt={gameTitle}
            fill
            className="object-cover"
          />
        </div>

        {/* 游戏信息 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            {/* 游戏描述 */}
            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">游戏介绍</h2>
              <p className="text-card-foreground">{gameDesc}</p>
              {gameIntro && gameIntro !== gameDesc && (
                <p className="mt-4 text-card-foreground">{gameIntro}</p>
              )}
            </div>

            {/* 游戏玩法 */}
            {game.howToPlay && (
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">玩法说明</h2>
                <p className="text-card-foreground whitespace-pre-line">{game.howToPlay}</p>
              </div>
            )}
          </div>

          {/* 游戏信息侧边栏 */}
          <div className="space-y-6">
            {/* 游戏统计 */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">游戏统计</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>游玩次数</span>
                  <span>{gameViews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>评分</span>
                  <span>{game.rating ? `${game.rating.toFixed(1)}分` : '暂无评分'}</span>
                </div>
                <div className="flex justify-between">
                  <span>点赞数</span>
                  <span>{game.likeCount?.toLocaleString() || 0}</span>
                </div>
              </div>
            </div>

            {/* 游戏标签 */}
            {game.tags && game.tags.length > 0 && (
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">游戏标签</h2>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 开始游戏按钮 */}
            <a
              href={gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              开始游戏
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
