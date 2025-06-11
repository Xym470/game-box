import Link from "next/link"
import Image from "next/image"
import type { Game } from "@/types/game"

interface RelatedGamesProps {
  games: Game[]
}

export function RelatedGames({ games }: RelatedGamesProps) {
  if (!games || games.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">相关游戏</h2>
      <div className="grid grid-cols-2 gap-4">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/details/${game.id}`}
            className="block group"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg border bg-card">
              <Image
                src={game.thumbnail}
                alt={game.title}
                width={320}
                height={180}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-sm font-medium truncate group-hover:text-primary">
              {game.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
} 