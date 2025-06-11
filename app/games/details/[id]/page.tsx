import Image from "next/image"
import { getGameById } from "@/lib/data"
import type { Game } from "@/lib/types"
import { GameEmbed } from "@/components/game/game-embed"
import { GameList } from "@/components/game/game-list"
import { Breadcrumb } from "@/components/common/breadcrumb"
import { JsonLdScript } from "@/components/seo/json-ld-script"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, CalendarDays, Info, Gamepad } from "lucide-react"
import { SITE_NAME, BASE_URL } from "@/lib/constants"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface GameDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  const gameResult = await getGameById(params.id)
  const game = gameResult.data

  if (!game) {
    return {
      title: `游戏未找到 | ${SITE_NAME}`,
    }
  }

  return {
    title: `${game.title} | ${SITE_NAME}`,
    description: game.description,
    keywords: [game.title, game.genre, ...(game.tags || []), "H5游戏", "在线玩"],
    openGraph: {
      title: `${game.title} | ${SITE_NAME}`,
      description: game.description,
      url: `${BASE_URL}/games/details/${game.id}`,
      images: [
        {
          url: game.logo,
          width: 400, // 根据你的logo实际尺寸调整
          height: 300,
          alt: game.title,
        },
      ],
      type: "article", // 或者 'product' 如果更合适
      // article specific OG tags
      // publishedTime: game.releaseDate,
      // authors: [game.developerId || SITE_NAME],
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.title} | ${SITE_NAME}`,
      description: game.description,
      images: [game.logo],
    },
  }
}

// 如果游戏数量不多，可以预渲染；如果很多，可以考虑 ISR 或动态渲染
// export async function generateStaticParams() {
//   const gamesResult = await getGames(undefined, undefined, 100); // 获取所有游戏
//   return gamesResult.data.map((game) => ({
//     id: game.id,
//   }));
// }

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const gameResult = await getGameById(params.id)
  const game = gameResult.data

  if (!game) {
    notFound()
  }

  const recommendedGamesData =
    game.recommendedGames && game.recommendedGames.length > 0
      ? await Promise.all(game.recommendedGames.map((id) => getGameById(id)))
      : []

  const validRecommendedGames = recommendedGamesData.map((res) => res.data).filter((g) => g !== null) as Game[]

  const breadcrumbItems = [
    { name: "首页", href: "/" },
    { name: `${game.genre}游戏`, href: `/games/${game.genre}` },
    { name: game.title },
  ]

  const videoGameJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    url: `${BASE_URL}/games/details/${game.id}`,
    image: game.logo,
    description: game.description,
    genre: game.genre,
    applicationCategory: "Game",
    operatingSystem: "Any", // H5 游戏通常跨平台
    gamePlatform: ["Web browser", "PC", "Mobile"], // H5 游戏可以在多种设备浏览器上运行
    playMode: "SinglePlayer", // 根据游戏实际情况调整，可以是 "MultiPlayer"
    datePublished: game.releaseDate,
    ...(game.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: game.rating.toString(),
        bestRating: "5", // 假设最高5分
        ratingCount: (game.views || 100).toString(), // 模拟评分人数
      },
    }),
    // "publisher": { "@type": "Organization", "name": "Your Publisher Name" }, // 如果有
    // "developer": { "@type": "Organization", "name": game.developerId || "Unknown Developer" }, // 如果有
  }

  return (
    <div>
      <JsonLdScript data={videoGameJsonLd} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{game.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-1.5" /> 发布于: {formatDate(game.releaseDate)}
            </span>
            {game.rating && (
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1.5 text-yellow-400 fill-yellow-400" /> {game.rating.toFixed(1)}/5.0
              </span>
            )}
            {game.views && (
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1.5" /> {game.views.toLocaleString()} 次游玩
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>{game.genre}</Badge>
            {game.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <section>
          <GameEmbed gameUrl={game.gameUrl} title={game.title} />
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3 flex items-center">
                <Info className="w-6 h-6 mr-2 text-primary" />
                游戏介绍
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{game.gameIntroduction}</p>
            </div>
            {game.howToPlay && (
              <div>
                <h2 className="text-2xl font-semibold mb-3 flex items-center">
                  <Gamepad className="w-6 h-6 mr-2 text-primary" />
                  玩法说明
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{game.howToPlay}</p>
              </div>
            )}
          </section>
          <aside className="md:col-span-1 space-y-6">
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-3">游戏信息</h3>
              <Image
                src={game.logo || "/placeholder.svg"}
                alt={game.title}
                width={300}
                height={225}
                className="rounded-md object-cover w-full aspect-[4/3] mb-3"
              />
              <p className="text-sm text-muted-foreground">
                <strong>类型:</strong> {game.genre}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>发布日期:</strong> {formatDate(game.releaseDate)}
              </p>
              {game.developerId && (
                <p className="text-sm text-muted-foreground">
                  <strong>开发商:</strong> {game.developerId}
                </p>
              )}
            </div>
          </aside>
        </div>

        {validRecommendedGames.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4">相关推荐</h2>
            <GameList games={validRecommendedGames} />
          </section>
        )}
      </article>
    </div>
  )
}
