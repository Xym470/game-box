import { GameList } from "@/components/game/game-list"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { getGamesByCategory } from "@/lib/data"
import { GAME_CATEGORIES, type GameCategory } from "@/lib/types"
import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: { category: GameCategory }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = GAME_CATEGORIES[params.category] || params.category
  if (!GAME_CATEGORIES[params.category]) {
    return {
      title: `未知分类 | ${SITE_NAME}`,
    }
  }
  return {
    title: `${categoryName}游戏 | ${SITE_NAME}`,
    description: `浏览所有${categoryName}类型的H5游戏，在线畅玩。`,
    keywords: [categoryName, "H5游戏", "在线游戏", SITE_NAME],
  }
}

export async function generateStaticParams() {
  const categories = Object.keys(GAME_CATEGORIES) as GameCategory[]
  return categories.map((category) => ({
    category: category,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  if (!GAME_CATEGORIES[category]) {
    notFound()
  }

  const gamesData = await getGamesByCategory(category, 24) // Fetch more games for icon view
  const categoryName = GAME_CATEGORIES[category]

  const breadcrumbItems = [{ name: "首页", href: "/" }, { name: `${categoryName}游戏` }]

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-6">{categoryName} 游戏</h1>
      <GameList games={gamesData.data || []} variant="icon" />
    </div>
  )
}
