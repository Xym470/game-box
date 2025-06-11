"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { GAME_CATEGORIES, type GameCategory } from "@/lib/types"

export function MainNav() {
  const pathname = usePathname()
  
  // 定义导航链接
  const navLinks = [
    { href: "/", label: "首页" },
    { href: "/games/new", label: "最新" },
    { href: "/games/hot", label: "热门" },
    { href: "/games/recommend", label: "推荐" },
    { href: "/games/all", label: "全部游戏" },
  ]

  return (
    <nav className="flex items-center justify-center space-x-6 lg:space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
