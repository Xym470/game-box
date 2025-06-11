import { SITE_NAME } from "@/lib/constants"
import Link from "next/link"
import { ScrollToTopButton } from "@/components/common/scroll-to-top-button"

export function Footer() {
  return (
    <footer className="w-full py-6 md:px-8 md:py-0 border-t mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">关于我们</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">联系我们</Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">隐私政策</Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">服务条款</Link>
          <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">常见问题</Link>
          <Link href="/cookie" className="text-sm text-muted-foreground hover:text-primary">Cookie政策</Link>
          <Link href="/dmca" className="text-sm text-muted-foreground hover:text-primary">DMCA政策</Link>
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  )
}
