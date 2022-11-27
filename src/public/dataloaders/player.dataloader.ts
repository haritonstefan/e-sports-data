import { PlayerService } from '../services';
import DataLoader from 'dataloader';
import { Player } from '../models';
import { listToMap } from '../helpers';

export function createPlayerLoader(playerService: PlayerService) {
  return new DataLoader<number, Player>(async (keys) => {
    const players = await playerService.getPlayersByIds([...keys]);

    const playersMap = listToMap(players, (player) => player.id);

    return keys.map((key) => playersMap[key]);
  });
}
