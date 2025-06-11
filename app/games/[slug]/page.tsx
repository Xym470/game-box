import { Metadata } from "next"
import { notFound } from "next/navigation"
import { GameHeader } from "@/components/games/game-header"
import { GameWindow } from "@/components/games/game-window"
import { GameDescription } from "@/components/games/game-description"
import { RelatedGames } from "@/components/games/related-games"
import { getGameBySlug, getRelatedGames } from "@/lib/games"

interface GamePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = await getGameBySlug(params.slug)
  
  if (!game) {
    return {}
  }

  return {
    title: game.title,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.description,
      images: [game.thumbnail],
    },
  }
}

export default async function GamePage({ params }: GamePageProps) {
  const game = await getGameBySlug(params.slug)
  
  if (!game) {
    notFound()
  }

  const relatedGames = await getRelatedGames(game.id, game.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <GameHeader game={game} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <GameWindow game={game} />
          <GameDescription game={game} className="mt-8" />
        </div>
        
        <div className="lg:col-span-1">
          <RelatedGames games={relatedGames} />
        </div>
      </div>
    </div>
  )
} 