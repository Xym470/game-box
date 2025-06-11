// API Route: /api/games/search
import { NextResponse } from "next/server"
import { searchGames } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ code: 400, msg: "Search query is required", data: [] }, { status: 400 })
  }

  try {
    const result = await searchGames(query)
    return NextResponse.json(result)
  } catch (error) {
    console.error("API Error /api/games/search: ", error)
    return NextResponse.json({ code: 500, msg: "Internal Server Error", data: null }, { status: 500 })
  }
}
