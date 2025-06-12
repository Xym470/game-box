import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["H5游戏", "在线游戏", "游戏盒子", "小游戏", "益智游戏", "动作游戏"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/placeholder.svg?width=1200&height=630&query=h5+game+portal+og", // 替换为你的 OG 图片
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/placeholder.svg?width=1200&height=630&query=h5+game+portal+twitter"], // 替换为你的 Twitter 图片
    // creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico", // 确保你有 favicon.ico
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // 如果你创建 PWA manifest
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // 对于游戏体验，有时会禁用缩放
  // userScalable: false, // 禁用用户缩放
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <div className="flex flex-col min-h-screen w-full items-center relative z-0">
            <div className="w-full max-w-screen-lg flex flex-col min-h-screen backdrop-blur-[2px]">
              <Header />
              <main className="flex-1 container py-8">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
