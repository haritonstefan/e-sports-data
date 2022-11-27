import { IVideogame } from '../../panda-score/interfaces';
import { Videogame } from '../models';

export function pandaScoreVideogameToVideogame(
  videogame: IVideogame,
): Videogame {
  return {
    title: videogame.name,
    slug: videogame.slug,
    id: videogame.id,
  };
}
