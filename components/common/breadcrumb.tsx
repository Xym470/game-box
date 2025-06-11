import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { JsonLdScript } from "@/components/seo/json-ld-script"
import { BASE_URL } from "@/lib/constants"

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href && { item: `${BASE_URL}${item.href}` }),
    })),
  }

  return (
    <>
      <JsonLdScript data={breadcrumbJsonLd} />
      <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
        <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.name} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium text-foreground">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
