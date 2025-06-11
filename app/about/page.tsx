import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `关于我们 | ${SITE_NAME}`,
  description: `了解${SITE_NAME}的团队、使命和价值观。`,
}

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">关于我们</h1>
      <p className="text-lg text-muted-foreground mb-8">
        我们是一个充满热情的游戏爱好者团队，致力于为所有年龄段的玩家打造一个简单、有趣且易于访问的游戏平台。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们的使命</h2>
      <p className="text-lg text-muted-foreground mb-8">
        我们的使命是为玩家提供高质量、免费且易于访问的游戏体验。我们相信游戏应该是一种娱乐和放松的方式，而不是一种负担。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们的价值观</h2>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">玩家至上：我们始终将玩家的需求和体验放在首位。</li>
        <li className="text-lg text-muted-foreground">质量第一：我们致力于提供高质量的游戏和用户体验。</li>
        <li className="text-lg text-muted-foreground">创新精神：我们不断探索新的游戏类型和玩法，为玩家带来新鲜感。</li>
        <li className="text-lg text-muted-foreground">社区建设：我们鼓励玩家之间的互动和交流，共同营造一个友好的游戏社区。</li>
      </ul>
    </div>
  )
} 