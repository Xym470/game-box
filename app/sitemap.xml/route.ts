// Route: /sitemap.xml
import { getGames } from "@/app/api/games"
import { BASE_URL } from "@/lib/constants"
import type { Game } from "@/types/game"

export async function GET() {
  let games: Game[] = [];
  
  try {
    const response = await getGames();
    
    // 确保 games 是数组
    if (Array.isArray(response)) {
      games = response;
    } else if (response && typeof response === 'object' && Array.isArray(response.data)) {
      games = response.data;
    }
  } catch (error) {
    console.error('获取游戏列表失败:', error);
  }
  
  // 从游戏中提取所有不重复的分类
  const categories = Array.from(new Set(
    games
      .map(game => game.category || game.genre)
      .filter(Boolean)
  ));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/games/all</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/games/hot</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/games/new</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/games/recommend</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${categories
    .map((category) => {
      return `
        <url>
          <loc>${`${BASE_URL}/games/category/${category}`}</loc>
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
          <lastmod>${game.createTime ? new Date(game.createTime).toISOString() : new Date().toISOString()}</lastmod>
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
