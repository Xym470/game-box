// 占位符: /api/comments
// 游戏评论的增删改查
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // 示例：发表评论
  // const body = await request.json(); // { gameId: string, userId: string, content: string }
  // ...处理评论，与 MongoDB 交互...
  return NextResponse.json({ code: 501, msg: "Post comment not implemented", data: null }, { status: 501 })
}

export async function GET(request: Request) {
  // 示例：获取某游戏的评论
  // const { searchParams } = new URL(request.url);
  // const gameId = searchParams.get('gameId');
  // ...查询评论...
  return NextResponse.json({ code: 501, msg: "Get comments not implemented", data: null }, { status: 501 })
}
