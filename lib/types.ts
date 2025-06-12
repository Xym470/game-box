// 游戏分类定义
export type GameCategory = {
  id: string
  name: string
  slug: string
  description?: string
}

// 预定义的游戏分类
export const GAME_CATEGORIES: GameCategory[] = [
  {
    id: "action",
    name: "动作游戏",
    slug: "action",
    description: "包含跑酷、格斗等动作元素的游戏"
  },
  {
    id: "puzzle",
    name: "益智游戏",
    slug: "puzzle",
    description: "需要动脑思考的智力游戏"
  },
  {
    id: "casual",
    name: "休闲游戏",
    slug: "casual",
    description: "简单易上手的休闲游戏"
  },
  {
    id: "strategy",
    name: "策略游戏",
    slug: "strategy",
    description: "需要战略思维的策略类游戏"
  },
  {
    id: "sports",
    name: "体育游戏",
    slug: "sports",
    description: "各类体育运动相关的游戏"
  },
  {
    id: "arcade",
    name: "街机游戏",
    slug: "arcade",
    description: "经典街机风格的游戏"
  }
] 