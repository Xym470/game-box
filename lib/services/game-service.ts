import { Game } from "@/types/game"
import * as gamesApi from "@/app/api/games"

// 获取游戏列表
export async function getGames(
  type: "latest" | "popular" | "all" = "all",
  genre?: string,
  limit: number = 12
): Promise<{ data: Game[] }> {
  try {
    // 根据类型调用不同的API
    let gamesResponse;
    
    if (type === "latest") {
      // 获取最新游戏，可以使用分页API
      gamesResponse = await gamesApi.getPaginatedGames(1, limit);
    } else if (type === "popular") {
      // 获取热门游戏，这里假设后端有相应接口
      // 如果没有，也可以使用普通getGames然后前端排序
      gamesResponse = await gamesApi.getGames();
    } else {
      // 获取所有游戏
      gamesResponse = await gamesApi.getGames();
    }
    
    // API返回的数据已经被拦截器处理，直接就是游戏数组
    let games = gamesResponse as unknown as Game[];
    
    // 根据类型排序（如果API没有提供排序功能）
    if (type === "popular") {
      games = [...games].sort((a, b) => (b.playCount || 0) - (a.playCount || 0));
    }
    
    // 根据类型筛选
    if (genre) {
      games = games.filter(game => (game.genre || game.category) === genre);
    }
    
    // 限制返回数量
    if (games.length > limit) {
      games = games.slice(0, limit);
    }
    
    return { data: games };
  } catch (error) {
    console.error("获取游戏列表失败:", error);
    return { data: [] };
  }
}

// 获取单个游戏详情
export async function getGameById(id: string | number): Promise<{ data: Game | null }> {
  try {
    // 调用API获取游戏详情
    const gameResponse = await gamesApi.getGameById(Number(id));
    // API返回的数据已经被拦截器处理，直接就是游戏对象
    return { data: gameResponse as unknown as Game };
  } catch (error) {
    console.error(`获取游戏ID=${id}详情失败:`, error);
    return { data: null };
  }
}

// 获取所有游戏类型
export async function getGameGenres(): Promise<string[]> {
  try {
    // 获取所有游戏
    const gamesResponse = await gamesApi.getGames();
    // API返回的数据已经被拦截器处理，直接就是游戏数组
    const games = gamesResponse as unknown as Game[];
    
    // 提取所有不重复的游戏类型
    const genres = [...new Set(games.map(game => game.genre || game.category).filter(Boolean))];
    return genres;
  } catch (error) {
    console.error("获取游戏类型失败:", error);
    return [];
  }
}

// 搜索游戏
export async function searchGames(query: string): Promise<{ code: number, message: string, data: Game[] }> {
  try {
    // 获取所有游戏
    const allGames = await gamesApi.getGames();
    
    // 确保allGames是数组
    if (!Array.isArray(allGames)) {
      console.error("搜索游戏失败: API返回的数据不是数组", allGames);
      return { code: 1, message: "搜索失败，API返回格式错误", data: [] };
    }
    
    // 如果查询为空，返回所有游戏
    if (!query.trim()) {
      return { code: 0, message: "成功", data: allGames };
    }
    
    // 执行搜索 - 在名称、标题、描述中查找匹配项
    const searchQuery = query.toLowerCase().trim();
    const filteredGames = allGames.filter(game => {
      const name = (game.name || game.title || "").toLowerCase();
      const description = (game.description || game.gameIntroduction || "").toLowerCase();
      const category = (game.category || game.genre || "").toLowerCase();
      
      return name.includes(searchQuery) || 
             description.includes(searchQuery) || 
             category.includes(searchQuery);
    });
    
    return { 
      code: 0, 
      message: "成功", 
      data: filteredGames 
    };
  } catch (error) {
    console.error("搜索游戏失败:", error);
    return { code: 1, message: "搜索失败，请稍后重试", data: [] };
  }
} 