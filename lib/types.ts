/** 游戏接口定义 */
export interface Game {
  id: string // 在 MongoDB 中通常使用 string 类型的 ObjectId
  developerId: string | null // 同上
  title: string
  logo: string // 图片 URL
  gameUrl: string // H5 游戏嵌入 URL
  genre: string // 游戏类型/分类
  tags?: string[] // 标签
  open: boolean // 是否开放游玩
  releaseDate: string // 发布日期 ISO string
  description: string // 简短描述
  gameIntroduction: string // 详细游戏介绍
  howToPlay?: string // 玩法说明
  recommendedGames?: string[] // 相关推荐游戏 ID 列表
  // recommendedVideos: string; // 视频推荐，暂时简化
  // downloadLink: string; // 下载链接，H5 盒子主要是在线，此项可选
  views?: number // 浏览量/热度
  rating?: number // 评分
}

// 返回信息规范
export interface Result<T = unknown> {
  code: number // 0 表示成功，其他表示失败
  msg: string
  data: T
}

export type GameCategory = "all" | "new" | "hot" | "recommend"

export const GAME_CATEGORIES: Record<GameCategory, string> = {
  all: "全部",
  new: "最新",
  hot: "热门",
  recommend: "推荐",
}
