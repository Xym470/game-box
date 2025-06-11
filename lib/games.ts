import { Game } from "@/types/game"

// 这里应该连接到你的数据库或API
// 这是一个模拟实现
export async function getGameBySlug(slug: string): Promise<Game | null> {
  // TODO: 实现实际的数据获取逻辑
  return {
    id: "1",
    title: "示例游戏",
    slug: slug,
    description: "这是一个示例游戏的详细描述。游戏特点包括精美的画面、流畅的操作和丰富的关卡设计。",
    thumbnail: "/games/example-game.jpg",
    url: "https://example.com/game",
    category: "动作游戏",
    tags: ["动作", "冒险", "解谜"],
    instructions: "使用键盘方向键移动角色，空格键跳跃，按E键与物品互动。收集所有宝石并到达终点即可通关。",
    controls: {
      "方向键": "移动",
      "空格键": "跳跃",
      "E": "互动",
    },
    width: 800,
    height: 600,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    playCount: 1000,
    rating: 4.5,
    ratingCount: 100,
  }
}

export async function getRelatedGames(gameId: string, category: string): Promise<Game[]> {
  // TODO: 实现实际的相关游戏获取逻辑
  return Array.from({ length: 3 }, (_, i) => ({
    id: `related-${i + 1}`,
    title: `相关游戏 ${i + 1}`,
    slug: `related-game-${i + 1}`,
    description: "这是一个相关游戏的简短描述。",
    thumbnail: "/games/related-game.jpg",
    url: "https://example.com/related-game",
    category: category,
    tags: ["动作", "冒险"],
    instructions: "游戏说明",
    controls: {},
    width: 800,
    height: 600,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-03-19T00:00:00Z",
    playCount: 500,
    rating: 4.0,
    ratingCount: 50,
  }))
} 