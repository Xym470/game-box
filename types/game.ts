export interface Game {
  id: string
  title: string
  slug: string
  description: string
  thumbnail: string
  url: string
  category: string
  tags: string[]
  instructions: string
  controls: {
    [key: string]: string
  }
  width: number
  height: number
  createdAt: string
  updatedAt: string
  playCount: number
  rating: number
  ratingCount: number
} 