"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Circle {
  x: number
  y: number
  size: number
  baseSize: number // 存储原始大小
  gradient: string[]
  opacity: number
  relativeX: number // 相对位置（0-1）
  relativeY: number // 相对位置（0-1）
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const circlesRef = useRef<Circle[]>([])
  const scrollOffsetRef = useRef(0)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const theme = mounted ? resolvedTheme : "light"

  // 根据屏幕宽度计算圆点大小的比例
  const getResponsiveScale = (width: number) => {
    if (width < 640) return 0.7; // 手机屏幕
    if (width < 1024) return 0.85; // 平板屏幕
    return 1; // 桌面屏幕
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      if (canvas.parentElement) {
        const { width, height } = canvas.parentElement.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1
        
        canvas.width = width * dpr
        canvas.height = height * dpr
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        ctx.scale(dpr, dpr)
        
        // 如果是首次初始化，创建圆点
        if (circlesRef.current.length === 0) {
          initializeElements(width, height)
        } else {
          // 更新现有圆点的位置和大小，保持相对位置不变
          updateElements(width, height)
        }
      }
    }

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY * 0.5 // 滚动视差效果
    }

    const updateElements = (width: number, height: number) => {
      const responsiveScale = getResponsiveScale(width)
      
      // 更新每个圆点的实际位置和大小，但保持相对位置不变
      circlesRef.current = circlesRef.current.map(circle => ({
        ...circle,
        x: circle.relativeX * width,
        y: circle.relativeY * height,
        size: circle.baseSize * responsiveScale,
      }))
    }

    const initializeElements = (width: number, height: number) => {
      const gradients = theme === "dark" 
        ? [
            ["#ff69b4", "#9370db"],  // 粉紫渐变
            ["#4169e1", "#9400d3"],  // 蓝紫渐变
            ["#ff1493", "#4b0082"],  // 深粉紫渐变
          ]
        : [
            ["#ff69b4", "#da70d6"],  // 浅粉紫渐变
            ["#1e90ff", "#9370db"],  // 浅蓝紫渐变
            ["#ff69b4", "#9370db"],  // 粉紫渐变
          ]

      // 响应式调整圆点数量和大小
      const responsiveScale = getResponsiveScale(width)
      const baseCircleCount = Math.floor(width * height * 0.00015)
      const circleCount = Math.min(
        Math.max(
          Math.floor(baseCircleCount * responsiveScale),
          12 // 最小圆点数量
        ),
        35 // 最大圆点数量
      )
      
      // 将页面分成网格
      const gridCols = Math.ceil(Math.sqrt(circleCount))
      const gridRows = Math.ceil(circleCount / gridCols)
      
      let currentCount = 0
      for (let row = 0; row < gridRows && currentCount < circleCount; row++) {
        for (let col = 0; col < gridCols && currentCount < circleCount; col++) {
          const gradient = gradients[Math.floor(Math.random() * gradients.length)]
          
          // 计算相对位置（0-1范围内）
          const relativeOffsetX = Math.random() * 0.8 + 0.1
          const relativeOffsetY = Math.random() * 0.8 + 0.1
          const relativeX = (col + relativeOffsetX) / gridCols
          const relativeY = (row + relativeOffsetY) / gridRows
          
          // 计算实际位置
          const x = relativeX * width
          const y = relativeY * height
          
          // 响应式调整圆点大小
          const baseSize = Math.random() * 15 + 5 // 减小基础大小范围
          const finalSize = baseSize * responsiveScale
          
          circlesRef.current.push({
            x,
            y,
            size: finalSize,
            baseSize,
            gradient,
            opacity: Math.random() * 0.5 + 0.3,
            relativeX,
            relativeY,
          })
          
          currentCount++
        }
      }
    }

    const drawGradientCircle = (ctx: CanvasRenderingContext2D, circle: Circle, scrollOffset: number) => {
      ctx.save()
      
      // 应用滚动偏移
      const y = ((circle.y + scrollOffset * 0.7) % (canvas.height / window.devicePixelRatio * 1.2))
      
      const gradient = ctx.createRadialGradient(
        circle.x, y, 0,
        circle.x, y, circle.size
      )
      gradient.addColorStop(0, circle.gradient[0])
      gradient.addColorStop(1, circle.gradient[1])
      
      ctx.globalAlpha = circle.opacity
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(circle.x, y, circle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      if (!canvas || !ctx) return

      // 设置背景色
      ctx.fillStyle = theme === "dark" ? "#1a1a1a" : "#fff8f0" // 暖橙色背景
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      // 绘制圆点，应用滚动偏移
      circlesRef.current.forEach(circle => {
        drawGradientCircle(ctx, circle, scrollOffsetRef.current)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      circlesRef.current = []
    }
  }, [theme, mounted])

  if (!mounted) return null

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
} 