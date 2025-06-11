'use client'

import { Home } from "lucide-react"

export function ScrollToTopButton() {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-primary">
      <Home className="h-4 w-4" />
    </button>
  )
} 