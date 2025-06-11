import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `隐私政策 | ${SITE_NAME}`,
  description: `了解${SITE_NAME}如何收集、使用和保护您的个人信息。`,
}

export default function PrivacyPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">隐私政策</h1>
      <p className="text-lg text-muted-foreground mb-8">
        本隐私政策描述了${SITE_NAME}如何收集、使用和保护您的个人信息。我们致力于保护您的隐私，并确保您的个人信息安全。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们收集的信息</h2>
      <p className="text-lg text-muted-foreground mb-8">
        我们可能收集以下信息：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">您提供的个人信息，如姓名、电子邮件地址和电话号码。</li>
        <li className="text-lg text-muted-foreground">您使用我们网站或服务时自动收集的信息，如IP地址、浏览器类型和访问时间。</li>
        <li className="text-lg text-muted-foreground">来自第三方的信息，如社交媒体平台。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们如何使用您的信息</h2>
      <p className="text-lg text-muted-foreground mb-8">
        我们可能将您的信息用于以下目的：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">提供、维护和改进我们的网站和服务。</li>
        <li className="text-lg text-muted-foreground">处理您的请求和交易。</li>
        <li className="text-lg text-muted-foreground">向您发送有关我们网站和服务的更新、促销和营销信息。</li>
        <li className="text-lg text-muted-foreground">保护我们的网站和服务免受欺诈和滥用。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们如何保护您的信息</h2>
      <p className="text-lg text-muted-foreground mb-8">
        我们采取各种安全措施来保护您的个人信息，包括：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">使用加密技术来保护您的个人信息。</li>
        <li className="text-lg text-muted-foreground">限制对您个人信息的访问。</li>
        <li className="text-lg text-muted-foreground">定期审查我们的安全措施。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">您的权利</h2>
      <p className="text-lg text-muted-foreground mb-8">
        您有权：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">访问您的个人信息。</li>
        <li className="text-lg text-muted-foreground">更正您的个人信息。</li>
        <li className="text-lg text-muted-foreground">删除您的个人信息。</li>
        <li className="text-lg text-muted-foreground">反对我们处理您的个人信息。</li>
        <li className="text-lg text-muted-foreground">限制我们处理您的个人信息。</li>
        <li className="text-lg text-muted-foreground">数据可携带性。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">联系我们</h2>
      <p className="text-lg text-muted-foreground mb-8">
        如果您对本隐私政策有任何疑问，请通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：privacy@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
    </div>
  )
} 