import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Game } from "@/types/games"
import { Star, Eye } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  // 处理兼容性问题
  const gameTitle = game.title || game.name;
  const gameImage = game.logo || game.cover || "/placeholder.svg";
  const gameDate = game.releaseDate || game.createTime;
  const gameDesc = game.description;
  const gameGenre = game.genre || game.category;
  const gameViews = game.views || game.playCount;

  return (
    <Card className="overflow-hidden transition-all game-card">
      <Link href={`/games/details/${game.id}`} aria-label={gameTitle}>
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative w-full overflow-hidden group">
            <Image
              src={gameImage}
              alt={gameTitle}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold truncate mb-1">{gameTitle}</CardTitle>
          <p className="text-xs text-muted-foreground mb-2">发布于: {formatDate(gameDate)}</p>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10">{gameDesc}</p>
          <div className="mt-2 flex items-center space-x-2 text-xs text-muted-foreground">
            {game.rating && (
              <span className="flex items-center">
                <Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" /> {game.rating.toFixed(1)}
              </span>
            )}
            {gameViews && (
              <span className="flex items-center">
                <Eye className="w-3 h-3 mr-1" />{" "}
                {gameViews > 10000 ? (gameViews / 10000).toFixed(1) + "w" : gameViews}
              </span>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="transition-colors hover:bg-primary hover:text-primary-foreground">
            {gameGenre}
          </Badge>
          {game.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="transition-colors hover:bg-accent hover:text-accent-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
