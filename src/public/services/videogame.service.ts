import { Injectable } from '@nestjs/common';
import { PandaScoreService } from '../../panda-score';
import { Videogame } from '../models';
import { pandaScoreVideogameToVideogame } from '../helpers';

@Injectable()
export class VideogameService {
  constructor(private readonly pandaScore: PandaScoreService) {}

  public async getVideogame(id: number): Promise<Videogame> {
    const videogame = await this.pandaScore.getVideogame(id);
    return pandaScoreVideogameToVideogame(videogame);
  }

  public async getVideogames(limit: number, page: number) {
    const videogames = await this.pandaScore.getVideogames(limit, page);

    return videogames.map(pandaScoreVideogameToVideogame);
  }
}
