import { Injectable } from '@nestjs/common';
import { PandaScoreService } from '../../panda-score';
import { pandaScorePlayerToPlayer } from '../helpers';
import { Player } from '../models';

@Injectable()
export class PlayerService {
  constructor(private readonly pandaScore: PandaScoreService) {}

  public async getPlayer(id: number): Promise<Player> {
    const player = await this.pandaScore.getPlayer(id);
    return pandaScorePlayerToPlayer(player);
  }

  public async getPlayers(limit: number, page: number): Promise<Player[]> {
    const players = await this.pandaScore.getPlayers(limit, page);

    return players.map(pandaScorePlayerToPlayer);
  }

  public async getPlayersByIds(ids: number[]): Promise<Player[]> {
    const players = await this.pandaScore.getPlayersByIds(ids);

    return players.map(pandaScorePlayerToPlayer);
  }
}
