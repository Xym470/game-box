import type { Game } from "@/types/game"

// 模拟数据库操作
export async function getGameById(id: string): Promise<Game | null> {
  // 模拟数据库查询延迟
  await new Promise((resolve) => setTimeout(resolve, 100))

  // 模拟游戏数据
  return {
    id,
    title: `游戏 ${id}`,
    description: "这是一个示例游戏",
    thumbnail: "/placeholder.png",
    url: "https://example.com/game",
    genre: "动作游戏",
    tags: ["动作", "冒险"],
    instructions: "使用方向键移动，空格键跳跃",
    controls: {
      "方向键": "移动",
      "空格键": "跳跃",
    },
    width: 800,
    height: 600,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    playCount: 1000,
    rating: 4.5,
    ratingCount: 100,
  }
}

export async function getRelatedGames(gameId: string, genre: string): Promise<Game[]> {
  // 模拟数据库查询延迟
  await new Promise((resolve) => setTimeout(resolve, 100))

  // 模拟相关游戏数据
  return Array.from({ length: 4 }, (_, i) => ({
    id: `related-${i + 1}`,
    title: `相关游戏 ${i + 1}`,
    description: "这是一个相关游戏",
    thumbnail: "/placeholder.png",
    url: "https://example.com/game",
    genre: genre,
    tags: ["动作", "冒险"],
    instructions: "使用方向键移动，空格键跳跃",
    controls: {
      "方向键": "移动",
      "空格键": "跳跃",
    },
    width: 800,
    height: 600,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    playCount: 1000,
    rating: 4.5,
    ratingCount: 100,
  }))
} 