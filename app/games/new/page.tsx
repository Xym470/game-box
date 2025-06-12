"use client"

import { useEffect, useState } from "react"
import { useGameStore } from "@/lib/store/game-store"
import { CacheInitializer } from "@/components/cache-initializer"
import { Breadcrumb } from "@/components/common/breadcrumb"
import type { Game } from "@/types/game"
import { Loader2 } from "lucide-react"

export default function NewGamesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { games, getNewGames } = useGameStore()
  const [newGames, setNewGames] = useState<Game[]>([])
  const breadcrumbItems = [{ name: "首页", href: "/" }, { name: "最新游戏" }]

  useEffect(() => {
    // 如果缓存中有数据，则使用缓存数据
    if (games.length > 0) {
      setNewGames(getNewGames(20)) // 获取20个最新游戏
      setIsLoading(false)
    } else {
      // 缓存中没有数据，等待CacheInitializer加载
      setIsLoading(true)
    }
  }, [games, getNewGames])

  // 监听游戏数据变化
  useEffect(() => {
    if (games.length > 0) {
      setNewGames(getNewGames(20))
      setIsLoading(false)
    }
  }, [games, getNewGames])

  if (isLoading) {
    return (
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-6">最新游戏</h1>
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">正在加载最新游戏...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* 初始化缓存组件 */}
      <CacheInitializer />
      
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-6">最新游戏</h1>
      
      {/* 使用网格布局展示游戏图片链接 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
        {newGames.map((game: Game) => (
          <div key={game.id} className="group relative">
            <a 
              href={`/games/details/${game.id}`}
              className="block overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={game.cover || game.logo || "/placeholder.svg"} 
                  alt={game.name || game.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xs sm:text-sm font-medium truncate">{game.name || game.title}</h3>
                {game.rating && (
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs text-muted-foreground ml-1">{game.rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
      
      {newGames.length === 0 && !isLoading && (
        <p className="text-center text-muted-foreground py-10">暂无最新游戏数据</p>
      )}
    </div>
  )
} 