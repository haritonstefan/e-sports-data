import { VideogameService } from '../services';
import DataLoader from 'dataloader';
import { Videogame } from '../models';
import { listToMap } from '../helpers';

export function createVideogameLoader(videogameService: VideogameService) {
  return new DataLoader<number, Videogame>(async (keys) => {
    const players = await videogameService.getVideogames(100, 1, {
      id: [...keys],
    });

    const videogamesMap = listToMap(players, (videogame) => videogame.id);

    return keys.map((key) => videogamesMap[key]);
  });
}
