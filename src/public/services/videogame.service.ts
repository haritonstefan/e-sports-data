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

  public async getVideogames(limit: number, page: number, params: any = {}) {
    const videogames = await this.pandaScore.getVideogames(limit, page, params);

    return videogames.map(pandaScoreVideogameToVideogame);
  }
}
