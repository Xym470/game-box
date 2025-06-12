"use client" // 因为使用了 useSearchParams

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { GameList } from "@/components/game/game-list"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { useGameStore } from "@/lib/store/game-store"
import { CacheInitializer } from "@/components/cache-initializer"
import type { Game } from "@/types/game"
import { Loader2 } from "lucide-react"

// 由于 generateMetadata 不能用于客户端组件，如果需要动态标题，
// 可以将此页面拆分为服务器组件包装器和客户端组件，或者在 layout.tsx 中处理。
// 为简单起见，这里使用固定标题或在客户端更新 document.title。

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // 使用游戏数据缓存
  const { 
    games: cachedGames, 
    searchGames,
    isLoading: storeLoading
  } = useGameStore()

  useEffect(() => {
    if (query) {
      document.title = `搜索 "${query}" | H5 游戏盒子` // 客户端更新标题
      setLoading(true)
      setError(null)
      
      // 检查是否有缓存数据
      if (cachedGames.length > 0) {
        try {
          // 使用缓存数据进行本地搜索
          const results = searchGames(query);
          setGames(results);
          setLoading(false);
        } catch (error) {
          console.error("搜索失败:", error);
          setError("搜索时发生错误，请稍后再试。");
          setGames([]);
          setLoading(false);
        }
      } else {
        // 等待缓存初始化完成
        setLoading(true);
      }
    } else {
      setGames([]);
      setLoading(false);
    }
  }, [query, cachedGames, searchGames]);

  // 监听缓存加载状态
  useEffect(() => {
    if (query && cachedGames.length > 0 && !storeLoading) {
      try {
        const results = searchGames(query);
        setGames(results);
      } catch (error) {
        console.error("搜索失败:", error);
        setError("搜索时发生错误，请稍后再试。");
        setGames([]);
      } finally {
        setLoading(false);
      }
    }
  }, [cachedGames, storeLoading, query, searchGames]);

  const breadcrumbItems = [{ name: "首页", href: "/" }, { name: `搜索结果: "${query || ""}"` }]

  return (
    <div>
      {/* 初始化缓存组件 */}
      <CacheInitializer />
      
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-6">搜索结果 {query ? `for "${query}"` : ""}</h1>
      {loading && (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2">正在加载搜索结果...</p>
        </div>
      )}
      {!loading && error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && games.length === 0 && query && (
        <p className="text-center text-muted-foreground">未能找到与 "{query}"相关的游戏。</p>
      )}
      {!loading && !error && games.length > 0 && <GameList games={games} />}
      {!query && !loading && <p className="text-center text-muted-foreground">请输入关键词进行搜索。</p>}
    </div>
  )
}
