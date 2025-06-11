import { Game } from "@/types/game"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GameDescriptionProps {
  game: Game
  className?: string
}

export function GameDescription({ game, className }: GameDescriptionProps) {
  return (
    <Card className={className}>
      <Tabs defaultValue="description" className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>游戏信息</CardTitle>
            <TabsList>
              <TabsTrigger value="description">游戏介绍</TabsTrigger>
              <TabsTrigger value="instructions">玩法说明</TabsTrigger>
              <TabsTrigger value="controls">操作方法</TabsTrigger>
            </TabsList>
          </div>
        </CardHeader>
        <CardContent>
          <TabsContent value="description" className="mt-0">
            <div className="prose dark:prose-invert max-w-none">
              {game.description}
            </div>
          </TabsContent>
          <TabsContent value="instructions" className="mt-0">
            <div className="prose dark:prose-invert max-w-none">
              {game.instructions}
            </div>
          </TabsContent>
          <TabsContent value="controls" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(game.controls).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <kbd className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted rounded border">
                    {key}
                  </kbd>
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
} 