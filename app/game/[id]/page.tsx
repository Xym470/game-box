import { getGameById } from "@/lib/services/game-service";
import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface GamePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const gameData = await getGameById(parseInt(params.id, 10));
  const game = gameData.data;

  if (!game) {
    return {
      title: `游戏不存在 | ${SITE_NAME}`,
    };
  }

  return {
    title: `${game.name || game.title} | ${SITE_NAME}`,
    description: game.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const gameData = await getGameById(parseInt(params.id, 10));
  const game = gameData.data;

  if (!game) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 游戏标题 */}
        <h1 className="text-3xl font-bold mb-4">{game.name || game.title}</h1>

        {/* 游戏封面 */}
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <img
            src={game.cover || game.logo}
            alt={game.name || game.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* 游戏信息 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            {/* 游戏描述 */}
            <div className="bg-card rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">游戏介绍</h2>
              <p className="text-card-foreground">{game.description}</p>
              {game.gameIntroduction && (
                <p className="mt-4 text-card-foreground">{game.gameIntroduction}</p>
              )}
            </div>

            {/* 游戏玩法 */}
            {game.howToPlay && (
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">玩法说明</h2>
                <p className="text-card-foreground whitespace-pre-line">{game.howToPlay}</p>
              </div>
            )}
          </div>

          {/* 游戏信息侧边栏 */}
          <div className="space-y-6">
            {/* 游戏统计 */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">游戏统计</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>游玩次数</span>
                  <span>{game.playCount || game.views || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>评分</span>
                  <span>{game.rating ? `${game.rating}分` : '暂无评分'}</span>
                </div>
                <div className="flex justify-between">
                  <span>点赞数</span>
                  <span>{game.likeCount || 0}</span>
                </div>
              </div>
            </div>

            {/* 游戏标签 */}
            {game.tags && game.tags.length > 0 && (
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">游戏标签</h2>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 开始游戏按钮 */}
            <a
              href={game.url || game.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              开始游戏
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 