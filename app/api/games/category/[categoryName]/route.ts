// API Route: /api/games/category/[categoryName]
import { NextResponse } from "next/server"
import { getGamesByCategory } from "@/lib/data"
import type { GameCategory } from "@/lib/types"

export async function GET(request: Request, { params }: { params: { categoryName: string } }) {
  const category = params.categoryName as GameCategory
  const { searchParams } = new URL(request.url)
  const limit = Number.parseInt(searchParams.get("limit") || "10", 10)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)

  // Basic validation if category is valid
  // const validCategories = Object.keys(GAME_CATEGORIES);
  // if (!validCategories.includes(category)) {
  //   return NextResponse.json({ code: 400, msg: 'Invalid category', data: null }, { status: 400 });
  // }

  try {
    const result = await getGamesByCategory(category, limit, page)
    return NextResponse.json(result)
  } catch (error) {
    console.error(`API Error /api/games/category/${category}: `, error)
    return NextResponse.json({ code: 500, msg: "Internal Server Error", data: null }, { status: 500 })
  }
}
