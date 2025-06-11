// API Route: /api/games/details/[id]
import { NextResponse } from "next/server"
import { getGameById } from "@/lib/data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  try {
    const result = await getGameById(id)
    if (result.code === 404) {
      return NextResponse.json(result, { status: 404 })
    }
    return NextResponse.json(result)
  } catch (error) {
    console.error(`API Error /api/games/details/${id}: `, error)
    return NextResponse.json({ code: 500, msg: "Internal Server Error", data: null }, { status: 500 })
  }
}
