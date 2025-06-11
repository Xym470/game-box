import Link from "next/link"
import { Gamepad2 } from "lucide-react"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { SearchBar } from "@/components/common/search-bar"
import { SITE_NAME } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center sm:justify-between">
        <div className="flex items-center space-x-2">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">{SITE_NAME}</span>
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center px-4">
          <MainNav />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-full md:w-auto">
            <SearchBar />
          </div>
          {/* 占位用户登录/注册按钮 */}
          {/* <Button variant="outline" size="sm">登录</Button> */}
        </div>
      </div>
    </header>
  )
}
