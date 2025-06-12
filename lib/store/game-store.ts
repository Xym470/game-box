import { Game } from "@/types/game";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GameStore {
  // 游戏数据
  games: Game[];
  // 最后更新时间
  lastUpdated: number | null;
  // 加载状态
  isLoading: boolean;
  // 设置游戏数据
  setGames: (games: Game[]) => void;
  // 添加游戏数据
  addGames: (games: Game[]) => void;
  // 清除缓存
  clearCache: () => void;
  // 设置加载状态
  setLoading: (loading: boolean) => void;
  // 检查缓存是否过期
  isCacheExpired: () => boolean;
  // 获取所有游戏
  getAllGames: () => Game[];
  // 获取热门游戏
  getHotGames: (limit?: number) => Game[];
  // 获取最新游戏
  getNewGames: (limit?: number) => Game[];
  // 获取推荐游戏
  getRecommendGames: (limit?: number) => Game[];
  // 按ID获取游戏
  getGameById: (id: number | string) => Game | undefined;
  // 搜索游戏
  searchGames: (query: string) => Game[];
}

// 缓存过期时间：30分钟
const CACHE_EXPIRY = 30 * 60 * 1000;

// 创建游戏数据存储
export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      games: [],
      lastUpdated: null,
      isLoading: false,
      
      setGames: (games) => set({ 
        games, 
        lastUpdated: Date.now() 
      }),
      
      addGames: (newGames) => {
        const currentGames = get().games;
        // 合并游戏并去重
        const mergedGames = [...currentGames];
        
        newGames.forEach(newGame => {
          const exists = currentGames.some(game => game.id === newGame.id);
          if (!exists) {
            mergedGames.push(newGame);
          }
        });
        
        set({ 
          games: mergedGames,
          lastUpdated: Date.now()
        });
      },
      
      clearCache: () => set({ 
        games: [], 
        lastUpdated: null 
      }),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      isCacheExpired: () => {
        const { lastUpdated } = get();
        if (!lastUpdated) return true;
        
        const now = Date.now();
        return now - lastUpdated > CACHE_EXPIRY;
      },
      
      getAllGames: () => {
        return get().games;
      },
      
      getHotGames: (limit = 12) => {
        const games = get().games;
        // 按播放次数降序排序
        return [...games]
          .sort((a, b) => (b.playCount || 0) - (a.playCount || 0))
          .slice(0, limit);
      },
      
      getNewGames: (limit = 12) => {
        const games = get().games;
        // 按创建时间降序排序
        return [...games]
          .sort((a, b) => {
            const dateA = a.createTime ? new Date(a.createTime).getTime() : 0;
            const dateB = b.createTime ? new Date(b.createTime).getTime() : 0;
            return dateB - dateA;
          })
          .slice(0, limit);
      },
      
      getRecommendGames: (limit = 12) => {
        const games = get().games;
        // 按评分降序排序
        return [...games]
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, limit);
      },
      
      getGameById: (id) => {
        const numId = typeof id === 'string' ? parseInt(id, 10) : id;
        return get().games.find(game => game.id === numId);
      },
      
      searchGames: (query) => {
        const games = get().games;
        if (!query.trim()) return games;
        
        const searchQuery = query.toLowerCase().trim();
        return games.filter(game => {
          const name = (game.name || game.title || "").toLowerCase();
          const description = (game.description || game.gameIntroduction || "").toLowerCase();
          const category = (game.category || game.genre || "").toLowerCase();
          
          return name.includes(searchQuery) || 
                 description.includes(searchQuery) || 
                 category.includes(searchQuery);
        });
      }
    }),
    {
      name: "game-store",
      // 只持久化游戏数据和最后更新时间
      partialize: (state) => ({ 
        games: state.games,
        lastUpdated: state.lastUpdated
      })
    }
  )
); 