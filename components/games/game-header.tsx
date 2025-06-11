import { Game } from "@/types/game"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/ui/star-rating"

interface GameHeaderProps {
  game: Game
}

export function GameHeader({ game }: GameHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{game.title}</h1>
        <div className="flex items-center gap-4">
          <StarRating rating={game.rating} count={game.ratingCount} />
          <Badge variant="secondary">{game.category}</Badge>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {game.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="text-sm text-muted-foreground">
        游戏次数: {game.playCount.toLocaleString()} | 
        最后更新: {new Date(game.updatedAt).toLocaleDateString("zh-CN")}
      </div>
    </div>
  )
} 