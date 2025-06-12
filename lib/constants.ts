// 网站基本信息
export const SITE_NAME = "游戏盒子"
export const SITE_DESCRIPTION = "在线H5游戏平台，提供海量免费游戏"
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""

// 社交媒体链接
export const SOCIAL_LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  discord: "https://discord.com"
}

// 导航链接
export const NAV_LINKS = [
  { name: "首页", href: "/" },
  { name: "最新游戏", href: "/games/new" },
  { name: "热门游戏", href: "/games/hot" },
  { name: "全部游戏", href: "/games/all" }
]

// 页脚链接
export const FOOTER_LINKS = {
  关于我们: [
    { name: "关于我们", href: "/about" },
    { name: "联系我们", href: "/contact" },
    { name: "加入我们", href: "/jobs" }
  ],
  法律条款: [
    { name: "隐私政策", href: "/privacy" },
    { name: "服务条款", href: "/terms" },
    { name: "DMCA", href: "/dmca" }
  ],
  帮助: [
    { name: "常见问题", href: "/faq" },
    { name: "Cookie政策", href: "/cookie" }
  ]
}

// API相关
export const API_TIMEOUT = 10000 // 10秒
export const DEFAULT_PAGE_SIZE = 12
export const MAX_PAGE_SIZE = 48

// 缓存时间（秒）
export const CACHE_TIMES = {
  short: 60, // 1分钟
  medium: 300, // 5分钟
  long: 3600, // 1小时
  day: 86400 // 1天
} 