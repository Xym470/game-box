import type { Game } from "@/lib/types"
import { GameCard } from "./game-card"
import { CompactGameIcon } from "./compact-game-icon" // Added import
import { cn } from "@/lib/utils" // Ensure cn is imported

interface GameListProps {
  games: Game[]
  title?: string
  variant?: "card" | "icon" // Added variant prop
  className?: string
  gridClassName?: string
}

export function GameList({
  games,
  title,
  variant = "card", // Default to "card"
  className,
  gridClassName,
}: GameListProps) {
  if (!games || games.length === 0) {
    return (
      <p className={cn("text-center text-muted-foreground py-8", className)}>
        {title ? `暂无${title}游戏` : "暂无游戏数据"}
      </p>
    )
  }

  const baseGridClasses = "grid"
  let specificGridClasses = ""

  if (variant === "icon") {
    specificGridClasses =
      "grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 sm:gap-4"
  } else {
    // Default "card" variant
    specificGridClasses = "grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  }

  return (
    <section className={cn("py-8", className)}>
      {title && <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{title}</h2>}
      <div className={cn(baseGridClasses, specificGridClasses, gridClassName)}>
        {games.map((game) =>
          variant === "icon" ? <CompactGameIcon key={game.id} game={game} /> : <GameCard key={game.id} game={game} />,
        )}
      </div>
    </section>
  )
}
