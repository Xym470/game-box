// API Route: /api/games
// Handles fetching featured, popular, latest games
import { NextResponse } from "next/server"
import { getGames } from "@/lib/data"
import type { GameCategory } from "@/lib/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") as "featured" | "popular" | "latest" | undefined
  const category = searchParams.get("category") as GameCategory | undefined
  const limit = Number.parseInt(searchParams.get("limit") || "10", 10)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)

  try {
    const result = await getGames(type, category, limit, page)
    return NextResponse.json(result)
  } catch (error) {
    console.error("API Error /api/games: ", error)
    return NextResponse.json({ code: 500, msg: "Internal Server Error", data: null }, { status: 500 })
  }
}
