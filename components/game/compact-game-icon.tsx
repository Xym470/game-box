import Image from "next/image"
import Link from "next/link"
import type { Game } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CompactGameIconProps {
  game: Game
  className?: string
}

export function CompactGameIcon({ game, className }: CompactGameIconProps) {
  return (
    <Link
      href={`/games/details/${game.id}`}
      className={cn(
        "group relative flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
        className,
      )}
      aria-label={game.title}
    >
      <div className="aspect-square w-full overflow-hidden rounded-lg border bg-card shadow-sm group-hover:shadow-md transition-shadow">
        <Image
          src={game.logo || "/placeholder.svg?width=100&height=100&query=game+icon"}
          alt={game.title}
          width={100}
          height={100}
          sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="mt-1.5 text-xs font-medium text-foreground truncate w-full px-1 group-hover:text-primary transition-colors">
        {game.title}
      </p>
    </Link>
  )
}
