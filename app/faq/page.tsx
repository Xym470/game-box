import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `常见问题 | ${SITE_NAME}`,
  description: `查找${SITE_NAME}的常见问题解答。`,
}

export default function FaqPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">常见问题</h1>
      <p className="text-lg text-muted-foreground mb-8">
        以下是一些关于${SITE_NAME}的常见问题。如果您没有找到您的问题的答案，请随时联系我们。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">1. 什么是${SITE_NAME}？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        ${SITE_NAME}是一个在线游戏平台，提供各种类型的H5小游戏。我们的目标是让玩家能够轻松、愉快地享受游戏。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">2. 如何开始使用${SITE_NAME}？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        您只需访问我们的网站，浏览游戏库，然后点击您感兴趣的游戏即可开始游戏。无需下载或安装任何软件。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">3. ${SITE_NAME}是免费的吗？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        是的，${SITE_NAME}是免费的。您可以免费访问和玩我们平台上的所有游戏。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">4. 我需要注册才能使用${SITE_NAME}吗？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        不需要。您可以无需注册即可访问和玩我们平台上的游戏。但是，如果您想保存您的进度并与朋友分享您的成就，您可以创建一个免费账户。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">5. 我可以在移动设备上使用${SITE_NAME}吗？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        是的，${SITE_NAME}是响应式的，可以在各种设备上使用，包括台式机、笔记本电脑、平板电脑和智能手机。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">6. 我如何联系${SITE_NAME}？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        您可以通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：contact@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
    </div>
  )
} 