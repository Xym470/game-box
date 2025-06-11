"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GAME_CATEGORIES, type GameCategory } from "@/lib/types"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const categories = Object.keys(GAME_CATEGORIES) as GameCategory[]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <div className="flex flex-col space-y-4 py-4">
          <Link
            href="/"
            className={cn(
              "px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
            onClick={() => setOpen(false)}
          >
            首页
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/games/${category}`}
              className={cn(
                "px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                pathname === `/games/${category}` ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              {GAME_CATEGORIES[category]}
            </Link>
          ))}
          <Link
            href="/games/all"
            className={cn(
              "px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
              pathname === "/games/all" ? "text-primary" : "text-muted-foreground",
            )}
            onClick={() => setOpen(false)}
          >
            全部游戏
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
} 