import { getGameById } from "@/app/api/games"
import type { Metadata } from "next"

interface GameDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: GameDetailPageProps): Promise<Metadata> {
  try {
    const id = parseInt(params.id, 10)
    const response = await getGameById(id)
    
    // 处理不同的响应格式
    let game = null
    
    if (response && typeof response === 'object') {
      if ('data' in response && response.data) {
        // 处理 { data: { data: Game } } 格式
        if ('data' in response.data && response.data.data) {
          game = response.data.data
        } 
        // 处理 { data: Game } 格式
        else {
          game = response.data
        }
      } 
      // 直接就是 Game 对象
      else {
        game = response
      }
    }

    if (!game) {
      return {
        title: `游戏未找到`,
      }
    }

    // 处理兼容性问题
    const gameTitle = game.name || game.title || '';
    const gameDesc = game.description || '';

    return {
      title: gameTitle,
      description: gameDesc,
    }
  } catch (error) {
    console.error("获取游戏元数据失败:", error)
    return {
      title: "游戏加载失败",
    }
  }
} 