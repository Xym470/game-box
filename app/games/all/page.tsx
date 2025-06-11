import { Breadcrumb } from "@/components/common/breadcrumb"
import { getGames } from "@/lib/data"
import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `全部游戏 | ${SITE_NAME}`,
  description: `浏览所有H5游戏，在线畅玩。`,
  keywords: ["全部游戏", "H5游戏", "在线游戏", SITE_NAME],
}

export default async function AllGamesPage() {
  const gamesData = await getGames(undefined, undefined, 48) // 获取所有游戏

  const breadcrumbItems = [{ name: "首页", href: "/" }, { name: "全部游戏" }]

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-6">全部游戏</h1>
      
      {/* 使用网格布局展示游戏图片链接 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
        {gamesData.data && gamesData.data.map((game) => (
          <div key={game.id} className="group relative">
            <a 
              href={`/games/details/${game.id}`}
              className="block overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={game.logo || "/placeholder.svg"} 
                  alt={game.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xs sm:text-sm font-medium truncate">{game.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  {game.rating && (
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-xs text-muted-foreground ml-1">{game.rating.toFixed(1)}</span>
                    </div>
                  )}
                  {game.views && (
                    <span className="text-xs text-muted-foreground">
                      {game.views > 10000 
                        ? `${(game.views / 10000).toFixed(1)}万` 
                        : game.views.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
} 