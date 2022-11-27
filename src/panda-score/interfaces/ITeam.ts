import { IPlayer } from './IPlayer';
import { IVideogame } from './IVideogame';

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
