import { SITE_NAME } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `服务条款 | ${SITE_NAME}`,
  description: `了解${SITE_NAME}的服务条款和条件。`,
}

export default function TermsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">服务条款</h1>
      <p className="text-lg text-muted-foreground mb-8">
        本服务条款规定了您使用${SITE_NAME}网站和服务的条款和条件。请仔细阅读本服务条款，因为它们在您使用我们的网站和服务时适用。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">1. 接受服务条款</h2>
      <p className="text-lg text-muted-foreground mb-8">
        通过访问或使用${SITE_NAME}网站和服务，您同意受本服务条款的约束。如果您不同意本服务条款的任何部分，请不要使用我们的网站和服务。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">2. 使用我们的网站和服务</h2>
      <p className="text-lg text-muted-foreground mb-8">
        您可以使用我们的网站和服务进行个人、非商业用途。您不得使用我们的网站和服务进行任何非法或未经授权的目的。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">3. 用户内容</h2>
      <p className="text-lg text-muted-foreground mb-8">
        您对我们的网站和服务提交的任何内容（"用户内容"）均由您负责。您声明并保证您拥有或有权使用您提交的用户内容，并且用户内容不侵犯任何第三方的权利。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">4. 知识产权</h2>
      <p className="text-lg text-muted-foreground mb-8">
        ${SITE_NAME}网站和服务及其内容（包括但不限于文本、图像、徽标、图标、软件和设计）受版权、商标和其他知识产权法保护。未经我们明确书面许可，您不得复制、修改、分发、出售或出租我们的网站和服务或其任何部分。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">5. 免责声明</h2>
      <p className="text-lg text-muted-foreground mb-8">
        ${SITE_NAME}网站和服务按"原样"提供，不提供任何明示或暗示的保证。我们不保证我们的网站和服务将不间断、及时、安全或无错误。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">6. 责任限制</h2>
      <p className="text-lg text-muted-foreground mb-8">
        在任何情况下，${SITE_NAME}均不对因使用或无法使用我们的网站和服务而导致的任何直接、间接、偶然、特殊、惩罚性或后果性损害负责。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">7. 适用法律</h2>
      <p className="text-lg text-muted-foreground mb-8">
        本服务条款受中华人民共和国法律管辖，并按其解释。
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-4">8. 联系我们</h2>
      <p className="text-lg text-muted-foreground mb-8">
        如果您对本服务条款有任何疑问，请通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="text-lg text-muted-foreground">电子邮件：terms@example.com</li>
        <li className="text-lg text-muted-foreground">电话：+86 123 4567 8901</li>
        <li className="text-lg text-muted-foreground">地址：中国北京市朝阳区某某街道123号</li>
      </ul>
    </div>
  )
} 