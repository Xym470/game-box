// 模拟数据库交互
import type { Game, GameCategory, Result } from "./types"
import { GAME_CATEGORIES } from "./types"

const mockGames: Game[] = [
  {
    id: "1",
    developerId: "dev1",
    title: "方块消除乐",
    logo: "/puzzle-game-logo.png",
    gameUrl: "https://html5games.com/Game/Block-Puzzle/1f72b797-3623-4b98-86c0-11a19557b170", // 示例 H5 游戏链接
    genre: "puzzle",
    tags: ["益智", "消除", "休闲"],
    open: true,
    releaseDate: "2024-01-15T00:00:00Z",
    description: "经典的方块消除游戏，挑战你的空间想象力。",
    gameIntroduction:
      "这是一款非常有趣的益智游戏，玩家需要将不同形状的方块放入棋盘中，填满一行或一列即可消除。游戏设有多个关卡，难度逐渐递增，快来挑战吧！",
    howToPlay:
      "1. 拖动屏幕下方的方块到棋盘中。\n2. 填满一行或一列即可消除方块并得分。\n3. 当棋盘无法再放入任何方块时，游戏结束。",
    recommendedGames: ["2", "3"],
    views: 10500,
    rating: 4.5,
  },
  {
    id: "2",
    developerId: "dev2",
    title: "极速飞车",
    logo: "/placeholder-cbey6.png",
    gameUrl: "https://html5games.com/Game/Speed-Racing-Pro-2/9d0a7f8e-9f7a-4e8b-9a0c-3d1e2f5b6c7d",
    genre: "action",
    tags: ["动作", "赛车", "竞速"],
    open: true,
    releaseDate: "2024-03-20T00:00:00Z",
    description: "体验风驰电掣的快感，成为赛道之王！",
    gameIntroduction:
      "《极速飞车》是一款刺激的赛车游戏，拥有多种赛道和酷炫赛车供玩家选择。逼真的物理引擎和精美的画面将带给你沉浸式的赛车体验。",
    howToPlay:
      "1. 使用方向键或屏幕虚拟按键控制赛车方向。\n2. 收集赛道上的道具获得加速或其他效果。\n3. 争取在最短时间内完成比赛。",
    recommendedGames: ["1", "4"],
    views: 25000,
    rating: 4.8,
  },
  {
    id: "3",
    developerId: "dev1",
    title: "数字华容道",
    logo: "/number-puzzle-logo.png",
    gameUrl: "https://html5games.com/Game/Number-Puzzle/a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p", // 假设的链接
    genre: "puzzle",
    tags: ["益智", "数字", "逻辑"],
    open: true,
    releaseDate: "2023-11-01T00:00:00Z",
    description: "移动数字方块，挑战你的逻辑思维。",
    gameIntroduction: "一款经典的数字排列益智游戏，你需要通过滑动方块，将打乱的数字按照顺序重新排列。",
    howToPlay: "1. 点击数字方块，将其移动到相邻的空格中。\n2. 目标是将所有数字按照从小到大的顺序排列。",
    recommendedGames: ["1"],
    views: 8000,
    rating: 4.2,
  },
  {
    id: "4",
    developerId: "dev3",
    title: "星际探险家",
    logo: "/space-adventure-game-logo.png",
    gameUrl: "https://html5games.com/Game/Space-Explorer/b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q", // 假设的链接
    genre: "adventure",
    tags: ["冒险", "太空", "探索"],
    open: true,
    releaseDate: "2024-05-10T00:00:00Z",
    description: "驾驶飞船，探索未知的宇宙奥秘。",
    gameIntroduction:
      "在《星际探险家》中，你将扮演一名宇航员，驾驶先进的飞船探索广袤的宇宙。发现新的星球，收集资源，解开宇宙的秘密。",
    howToPlay: "1. 控制飞船移动和射击。\n2. 完成任务，升级飞船和装备。\n3. 小心避开危险的小行星和外星敌人。",
    recommendedGames: ["2"],
    views: 12000,
    rating: 4.6,
  },
  {
    id: "5",
    developerId: "dev2",
    title: "塔防总动员",
    logo: "/tower-defense-logo.png",
    gameUrl: "https://html5games.com/Game/Tower-Defense-Mobilization/c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r", // 假设的链接
    genre: "strategy",
    tags: ["策略", "塔防", "战争"],
    open: true,
    releaseDate: "2024-02-28T00:00:00Z",
    description: "布置你的防御塔，抵御一波又一波的敌人。",
    gameIntroduction:
      "一款经典的塔防游戏，你需要合理布置各种防御塔，阻止敌人通过你的防线。多种防御塔和敌人类型，考验你的策略布局能力。",
    howToPlay: "1. 选择合适的防御塔放置在地图上。\n2. 升级防御塔以增强火力。\n3. 消灭所有来袭的敌人。",
    recommendedGames: [],
    views: 15000,
    rating: 4.7,
  },
  {
    id: "6",
    developerId: "dev3",
    title: "开心农场乐",
    logo: "/farm-game-logo.png",
    gameUrl: "https://html5games.com/Game/Happy-Farm-Fun/d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s", // 假设的链接
    genre: "casual",
    tags: ["休闲", "模拟经营", "农场"],
    open: true,
    releaseDate: "2023-12-25T00:00:00Z",
    description: "种植作物，养殖动物，打造你的梦想农场。",
    gameIntroduction:
      "体验轻松愉快的农场生活！在《开心农场乐》中，你可以种植各种作物，饲养可爱的动物，并将农产品加工出售，不断扩大你的农场规模。",
    howToPlay: "1. 点击土地种植作物。\n2. 定期给作物浇水施肥。\n3. 收获成熟的作物和动物产品。",
    recommendedGames: ["3"],
    views: 9500,
    rating: 4.3,
  },
]

// 模拟 API 延时
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getGames(
  type?: "featured" | "popular" | "latest",
  category?: GameCategory,
  limit = 10,
  page = 1,
): Promise<Result<Game[]>> {
  await delay(300)
  let gamesToReturn = [...mockGames]

  if (category && category !== "all") {
    gamesToReturn = gamesToReturn.filter((game) => game.genre === category)
  }

  if (type === "featured") {
    // 简单模拟：评分高的为精选
    gamesToReturn.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  } else if (type === "popular") {
    // 简单模拟：浏览量高的为热门
    gamesToReturn.sort((a, b) => (b.views || 0) - (a.views || 0))
  } else if (type === "latest") {
    gamesToReturn.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
  }

  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  gamesToReturn = gamesToReturn.slice(startIndex, endIndex)

  return { code: 0, msg: "Success", data: gamesToReturn }
}

export async function getGameById(id: string): Promise<Result<Game | null>> {
  await delay(200)
  const game = mockGames.find((g) => g.id === id) || null
  if (game) {
    return { code: 0, msg: "Success", data: game }
  }
  return { code: 404, msg: "Game not found", data: null }
}

export async function searchGames(query: string): Promise<Result<Game[]>> {
  await delay(300)
  const lowerQuery = query.toLowerCase()
  const results = mockGames.filter(
    (game) =>
      game.title.toLowerCase().includes(lowerQuery) ||
      game.description.toLowerCase().includes(lowerQuery) ||
      game.genre.toLowerCase().includes(lowerQuery) ||
      (game.tags && game.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))),
  )
  return { code: 0, msg: "Success", data: results }
}

export async function getGamesByCategory(category: GameCategory, limit = 10, page = 1): Promise<Result<Game[]>> {
  return getGames(undefined, category, limit, page)
}

export async function getGameCategories(): Promise<Result<typeof GAME_CATEGORIES>> {
  await delay(100)
  return { code: 0, msg: "Success", data: GAME_CATEGORIES }
}
