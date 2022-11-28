import { IVideogame } from './i-videogame';
import { ITeam } from './i-team';

export interface IPlayer {
  id: number;
  age: number;
  birthday: string;
  current_team: ITeam;
  current_videogame: IVideogame;
  first_name: string;
  last_name: string;
  slug: string;
  name: string;
  image_url: string;
  nationality: string;
}
