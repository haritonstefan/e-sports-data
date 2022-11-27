import { Injectable } from '@nestjs/common';
import { PandaScoreService } from '../../panda-score';
import { pandaScoreTeamToTeam } from '../helpers';
import { Team } from '../models';

@Injectable()
export class TeamService {
  constructor(private readonly pandaScore: PandaScoreService) {}

  public async getTeam(id: number): Promise<Team> {
    const team = await this.pandaScore.getTeam(id);
    return pandaScoreTeamToTeam(team);
  }

  public async getTeams(
    limit: number,
    page: number,
    params: any = {},
  ): Promise<Team[]> {
    const teams = await this.pandaScore.getTeams(limit, page, params);
    return teams.map(pandaScoreTeamToTeam);
  }
}
