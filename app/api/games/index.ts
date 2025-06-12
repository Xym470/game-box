import instance from '../index';
import type { Game } from '@/types/game';

// 获取全部游戏
export const getGames = () => {
  return instance.get('/games');
};

// 通过id获取指定游戏
export const getGameById = (id: number) => {
  return instance.get(`/games/${id}`);
};

// 获取相似游戏
export const getGameBySimilarity = (similarity: string) => {
  return instance.get(`/games/similar/${similarity}`);
};

// 分页查询游戏列表
export const getPaginatedGames = (index: number, pages: number) => {
  return instance.get(`/games/getPaginatedList/${index}/${pages}`);
};

// 删除指定id的游戏
export const deleteGameById = (id: number) => {
  return instance.delete(`/games/${id}`);
};

// 新增游戏
export const insertGame = (game: Game) => {
  return instance.post('/games', game);
};

// 更新游戏
export const updateGame = (game: Game) => {
  return instance.put('/games', game);
};