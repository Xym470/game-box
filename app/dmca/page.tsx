import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `DMCA政策 | ${SITE_NAME}`,
  description: `了解${SITE_NAME}的DMCA政策。`,
}

export default function DmcaPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">DMCA政策</h1>
      <p className="text-lg text-muted-foreground mb-8">
        本DMCA政策描述了${SITE_NAME}如何处理版权侵权投诉。我们尊重知识产权，并致力于保护版权所有者的权利。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">什么是DMCA？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        DMCA（数字千年版权法）是一项美国法律，旨在保护数字内容创作者的权利。它规定了在线服务提供商在收到版权侵权投诉时应采取的措施。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">如何提交DMCA投诉？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        如果您认为${SITE_NAME}上的内容侵犯了您的版权，请通过以下方式提交DMCA投诉：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：dmca@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
      <p className="text-lg text-muted-foreground mb-8">
        您的投诉应包含以下信息：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">您的姓名、地址、电话号码和电子邮件地址。</li>
        <li className="text-lg text-muted-foreground">您声称被侵权的作品的描述。</li>
        <li className="text-lg text-muted-foreground">您声称侵权的${SITE_NAME}内容的URL。</li>
        <li className="text-lg text-muted-foreground">您声明您真诚地相信该内容的使用未经版权所有者、其代理人或法律授权。</li>
        <li className="text-lg text-muted-foreground">您声明，在伪证罪的惩罚下，您提供的信息是准确的，并且您是版权所有者或被授权代表版权所有者行事。</li>
        <li className="text-lg text-muted-foreground">您的电子或物理签名。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">我们如何处理DMCA投诉？</h2>
      <p className="text-lg text-muted-foreground mb-8">
        当我们收到DMCA投诉时，我们将：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">审查投诉，以确保其符合DMCA的要求。</li>
        <li className="text-lg text-muted-foreground">如果投诉有效，我们将删除或禁用被投诉的内容。</li>
        <li className="text-lg text-muted-foreground">通知被投诉内容的提供者，告知他们内容已被删除或禁用。</li>
        <li className="text-lg text-muted-foreground">如果被投诉内容的提供者认为内容被错误地删除或禁用，他们可以提交反通知。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">反通知</h2>
      <p className="text-lg text-muted-foreground mb-8">
        如果您认为您的内容被错误地删除或禁用，您可以提交反通知。您的反通知应包含以下信息：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">您的姓名、地址、电话号码和电子邮件地址。</li>
        <li className="text-lg text-muted-foreground">被删除或禁用的内容的标识。</li>
        <li className="text-lg text-muted-foreground">您声明，在伪证罪的惩罚下，您真诚地相信内容被错误地删除或禁用。</li>
        <li className="text-lg text-muted-foreground">您声明您同意接受您所在司法管辖区的联邦地区法院的管辖，或者如果您的地址在美国境外，则同意接受${SITE_NAME}所在司法管辖区的联邦地区法院的管辖。</li>
        <li className="text-lg text-muted-foreground">您的电子或物理签名。</li>
      </ul>
      <h2 className="text-2xl font-bold tracking-tight mb-4">联系我们</h2>
      <p className="text-lg text-muted-foreground mb-8">
        如果您对本DMCA政策有任何疑问，请通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：dmca@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
    </div>
  )
} 