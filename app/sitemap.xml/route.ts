// Route: /sitemap.xml
import { getGames, getGameCategories } from "@/lib/data"
import { BASE_URL } from "@/lib/constants"
import type { GameCategory } from "@/lib/types"

export async function GET() {
  const gamesResult = await getGames(undefined, undefined, 1000) // 获取所有游戏用于 sitemap
  const games = gamesResult.data || []
  const categoriesResult = await getGameCategories()
  const categories = Object.keys(categoriesResult.data || {}) as GameCategory[]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${categories
    .map((category) => {
      return `
        <url>
          <loc>${`${BASE_URL}/games/${category}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
    })
    .join("")}
  ${games
    .map((game) => {
      return `
        <url>
          <loc>${`${BASE_URL}/games/details/${game.id}`}</loc>
          <lastmod>${new Date(game.releaseDate).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
        </url>
      `
    })
    .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
