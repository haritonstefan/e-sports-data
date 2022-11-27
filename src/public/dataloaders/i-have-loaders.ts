import DataLoader from 'dataloader';
import { Player, Team, Videogame } from '../models';

export interface IHaveLoaders {
  playerLoader: DataLoader<number, Player>;
  teamLoader: DataLoader<number, Team>;
  videogameLoader: DataLoader<number, Videogame>;
}
