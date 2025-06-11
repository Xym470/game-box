"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, Minimize, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GameEmbedProps {
  gameUrl: string
  title: string
}

export function GameEmbed({ gameUrl, title }: GameEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showRotationPrompt, setShowRotationPrompt] = useState(false)

  const toggleFullscreen = () => {
    if (!iframeRef.current) return
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)

    const checkOrientation = () => {
      // 简单判断是否为移动设备且竖屏
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)
      if (isMobile && window.innerHeight > window.innerWidth) {
        setShowRotationPrompt(true)
      } else {
        setShowRotationPrompt(false)
      }
    }

    checkOrientation() // Initial check
    window.addEventListener("resize", checkOrientation) // Check on resize/orientation change

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      window.removeEventListener("resize", checkOrientation)
    }
  }, [])

  return (
    <div className="relative w-full aspect-[16/9] bg-slate-900 rounded-lg overflow-hidden shadow-lg">
      {showRotationPrompt && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 text-white p-4">
          <AlertTriangle className="w-12 h-12 text-yellow-400 mb-4" />
          <p className="text-lg font-semibold text-center">为了更好的游戏体验，请将您的设备旋转至横屏模式。</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={gameUrl}
        title={title}
        allowFullScreen
        className={cn("w-full h-full border-0", showRotationPrompt && "blur-sm")}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // 增强安全性
      />
      <div className="absolute top-2 right-2 z-10">
        <Button onClick={toggleFullscreen} variant="secondary" size="sm" className="opacity-80 hover:opacity-100">
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          <span className="ml-2 hidden sm:inline">{isFullscreen ? "退出全屏" : "全屏"}</span>
        </Button>
      </div>
    </div>
  )
}
