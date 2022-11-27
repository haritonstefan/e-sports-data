import { Injectable } from '@nestjs/common';
import { PlayerService } from './player.service';
import { TeamService } from './team.service';
import { Featured } from '../models/featured';
import { listShuffle } from '../helpers';

@Injectable()
export class FeaturedService {
  constructor(
    private readonly playerService: PlayerService,
    private readonly teamService: TeamService,
  ) {}

  public async getFeatured(): Promise<Featured> {
    const teams = await this.teamService.getTeams(10, 1, {
      sort: '-modified_at',
    });
    const players = await this.playerService.getPlayers(10, 1, {
      sort: '-modified_at',
    });

    const joined = [...teams, ...players];

    return { participants: listShuffle(joined) };
  }
}
