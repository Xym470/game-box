import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `联系我们 | ${SITE_NAME}`,
  description: `联系${SITE_NAME}团队，获取帮助或反馈。`,
}

export default function ContactPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">联系我们</h1>
      <p className="text-lg text-muted-foreground mb-8">
        如果您有任何问题、建议或反馈，请随时与我们联系。我们很乐意听取您的意见。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">联系方式</h2>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：contact@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">社交媒体</h2>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">微博：@example</li>
        <li className="text-lg text-muted-foreground">微信：example</li>
        <li className="text-lg text-muted-foreground">QQ：123456789</li>
      </ul>
    </div>
  )
} 