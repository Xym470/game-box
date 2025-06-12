import Image from "next/image"
import Link from "next/link"
import type { Game } from "@/types/games"
import { cn } from "@/lib/utils"

interface CompactGameIconProps {
  game: Game
  className?: string
}

export function CompactGameIcon({ game, className }: CompactGameIconProps) {
  // 处理兼容性问题
  const gameTitle = game.title || game.name;
  const gameImage = game.logo || game.cover || "/placeholder.svg";
  
  return (
    <Link
      href={`/games/details/${game.id}`}
      className={cn(
        "group relative flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
        className,
      )}
      aria-label={gameTitle}
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg border bg-card shadow-sm group-hover:shadow-md transition-shadow">
        <Image
          src={gameImage}
          alt={gameTitle}
          width={100}
          height={100}
          sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="mt-1.5 text-xs font-medium text-foreground truncate w-full px-1 group-hover:text-primary transition-colors">
        {gameTitle}
      </p>
    </Link>
  )
}
