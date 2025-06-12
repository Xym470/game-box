import { GameList } from "@/components/game/game-list"
import { getGames } from "@/app/api/games/index"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"
import type { Metadata } from "next"
import type { Game } from "@/types/game"
import { CacheInitializer } from "../components/cache-initializer"

export const metadata: Metadata = {
  title: `首页 | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
}

export default async function HomePage() {
  let games: Game[] = [];
  
  try {
    const response = await getGames();
    
    // 确保 games 是数组
    if (Array.isArray(response)) {
      games = response;
    } else if (response && typeof response === 'object' && Array.isArray(response.data)) {
      games = response.data;
    } else {
      console.error('获取游戏列表失败: 返回格式不是数组', response);
    }
  } catch (error) {
    console.error('获取游戏列表失败:', error);
  }

  // 为不同区块使用相同的游戏数据
  // 实际项目中应该通过不同的API获取不同类型的游戏
  const featuredGames = games.slice(0, 8);  // 取前8个作为精选游戏
  const popularGames = games.slice(8, 16);  // 取8-16个作为热门游戏
  const latestGames = games.slice(16, 24);  // 取16-24个作为最新游戏

  return (
    <div className="space-y-12">
      {/* 初始化缓存组件 - 将游戏数据传递给客户端组件 */}
      <CacheInitializer initialGames={games} />
      
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-center mb-4">{SITE_NAME}</h1>
        <p className="text-lg text-muted-foreground text-center mb-8">{SITE_DESCRIPTION}</p>
        {/* 可以放一个大的 Banner 或搜索框 */}
      </section>

      {featuredGames.length > 0 && (
        <GameList games={featuredGames} title="✨ 精选游戏" variant="icon" />
      )}
      {popularGames.length > 0 && (
        <GameList games={popularGames} title="🔥 热门游戏" variant="icon" />
      )}
      {latestGames.length > 0 && (
        <GameList games={latestGames} title="🎮 最新上线" variant="icon" />
      )}
      
      {/* 站点信息展示 */}
      <section className="text-center py-12 px-4 bg-secondary rounded-lg">
        <h2 className="text-2xl font-bold mb-4">免费在线小游戏</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          无需下载或安装，随时随地享受游戏的乐趣。我们的平台汇集了各种类型的H5小游戏，从益智解谜到动作冒险，总有一款适合您。
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">我们的游戏</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          我们精心挑选了数百款高质量的游戏。每一款游戏都经过我们的测试，以确保最佳的游戏体验、流畅的性能和有趣的内容。
        </p>
      </section>
      
      <section className="text-center py-12 px-4 bg-secondary rounded-lg">
        <h2 className="text-2xl font-bold mb-4">开始游戏</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          浏览我们的游戏库，点击任何您感兴趣的游戏图标即可立即开始。创建个人资料以保存您的进度并与朋友分享您的成就。
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">我们是什么</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          我们是一个充满热情的游戏爱好者团队，致力于为所有年龄段的玩家打造一个简单、有趣且易于访问的游戏平台。
        </p>
      </section>
    </div>
  )
}
