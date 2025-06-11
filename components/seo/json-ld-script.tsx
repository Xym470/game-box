// 通用 JSON-LD 脚本注入组件
interface JsonLdScriptProps {
  data: object
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
