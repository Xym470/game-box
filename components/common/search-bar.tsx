"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="search"
        placeholder="搜索游戏..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-9"
      />
      <Button type="submit" size="sm" variant="outline" className="h-9 px-3">
        <Search className="h-4 w-4" />
        <span className="sr-only">搜索</span>
      </Button>
    </form>
  )
}
