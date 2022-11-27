import { IVideogame } from '../../panda-score/interfaces';
import { Videogame } from '../videogame/videogame';

export default function pandaScoreVideogameToVideogame(
  videogame: IVideogame,
): Videogame {
  return {
    title: videogame.name,
    slug: videogame.slug,
    id: videogame.id,
  };
}
