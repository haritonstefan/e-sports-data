import { IPlayer } from './i-player';
import { IVideogame } from './i-videogame';

export interface ITeam {
  id: number;
  acronym: string;
  image_url: string;
  location: string;
  modified_at: Date;
  name: string;
  slug: string;
  players?: IPlayer[];
  current_videogame?: IVideogame;
}
