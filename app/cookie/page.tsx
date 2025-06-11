import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `Cookie政策 | ${SITE_NAME}`,
  description: `了解${SITE_NAME}如何使用Cookie。`,
}

export default function CookiePage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Cookie政策</h1>
      <p className="text-lg text-muted-foreground mb-8">
        本Cookie政策描述了${SITE_NAME}如何使用Cookie和类似技术。我们使用Cookie来改善您的浏览体验、分析网站流量和个性化内容。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">什么是Cookie？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Cookie是存储在您设备上的小文本文件。它们由网站放置在您的设备上，并可以由该网站或第三方读取。Cookie用于记住您的偏好、登录状态和其他信息，以便在您下次访问网站时提供更好的体验。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们如何使用Cookie？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        我们使用Cookie用于以下目的：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">记住您的偏好，如语言和地区设置。</li>
        <li className="text-lg text-muted-foreground">保持您的登录状态。</li>
        <li className="text-lg text-muted-foreground">分析网站流量和使用情况。</li>
        <li className="text-lg text-muted-foreground">个性化内容和广告。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们使用哪些类型的Cookie？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        我们使用以下类型的Cookie：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">必要Cookie：这些Cookie对于网站的正常运行是必不可少的。它们使您能够使用网站的基本功能，如导航和访问安全区域。</li>
        <li className="text-lg text-muted-foreground">性能Cookie：这些Cookie收集有关访问者如何使用网站的信息，例如他们访问了哪些页面以及他们是否遇到任何错误。这些Cookie不收集可识别访问者身份的信息。</li>
        <li className="text-lg text-muted-foreground">功能Cookie：这些Cookie允许网站记住您所做的选择，例如您的用户名、语言或地区。它们还可以用于提供您请求的功能，例如播放视频或使用聊天功能。</li>
        <li className="text-lg text-muted-foreground">目标Cookie：这些Cookie用于跟踪您访问的网站，并用于向您展示与您相关的广告。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">如何控制Cookie？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        您可以通过以下方式控制Cookie：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">更改您的浏览器设置：大多数浏览器允许您阻止或删除Cookie。您可以在浏览器的帮助文档中找到有关如何执行此操作的说明。</li>
        <li className="text-lg text-muted-foreground">使用隐私工具：有许多隐私工具可以帮助您控制Cookie，例如广告拦截器和隐私浏览器扩展。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">联系我们</h2>
      <p className="text-lg text-muted-foreground mb-8">
        如果您对本Cookie政策有任何疑问，请通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：cookie@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
    </div>
  )
} 