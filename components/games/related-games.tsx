import { Game } from "@/types/game"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { StarRating } from "@/components/ui/star-rating"

interface RelatedGamesProps {
  games: Game[]
}

export function RelatedGames({ games }: RelatedGamesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>相关游戏</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="group flex items-start space-x-4"
            >
              <div className="relative h-24 w-32 overflow-hidden rounded-lg">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-medium leading-none group-hover:text-primary">
                  {game.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {game.description}
                </p>
                <StarRating rating={game.rating} count={game.ratingCount} size="sm" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 