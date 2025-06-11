import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  count: number
  size?: "sm" | "default"
}

export function StarRating({ rating, count, size = "default" }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fill = i < Math.floor(rating) ? "fill-primary" : "fill-muted"
    return (
      <Star
        key={i}
        className={`${fill} ${size === "sm" ? "h-3 w-3" : "h-4 w-4"}`}
      />
    )
  })

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      <span className={`text-muted-foreground ${size === "sm" ? "text-xs" : "text-sm"}`}>
        ({count.toLocaleString()})
      </span>
    </div>
  )
} 