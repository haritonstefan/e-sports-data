import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PandaScoreService } from '../../panda-score/panda-score.service';
import { Team } from './team';
import pandaScoreTeamToTeam from '../helpers/panda-score-team-to-team';
import { Player } from '../player/player';
import pandaScorePlayerToPlayer from '../helpers/panda-score-player-to-player';
import { Videogame } from '../videogame/videogame';
import pandaScoreVideogameToVideogame from '../helpers/panda-score-videogame-to-videogame';

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Query(() => Team, { name: 'team' })
  public async team(@Args('id') id: number) {
    const team = await this.pandaScoreService.getTeam(id);
    return pandaScoreTeamToTeam(team);
  }

  @Query(() => [Team], { name: 'teams' })
  public async teams(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ) {
    const teams = await this.pandaScoreService.getTeams(limit, page);
    return teams.map(pandaScoreTeamToTeam);
  }

  @ResolveField(() => [Player], { name: 'players' })
  public async players(@Parent() team: Team) {
    if (!team.players) return null;

    const players = await this.pandaScoreService.getPlayersByIds(
      team.players.map((p) => p.id),
    );

    return players.map(pandaScorePlayerToPlayer);
  }

  @ResolveField(() => Videogame, { name: 'videogame' })
  public async videogame(@Parent() team: Team) {
    if (!team.videogame) return null;

    const videogame = await this.pandaScoreService.getVideogame(
      team.videogame.id,
    );

    return pandaScoreVideogameToVideogame(videogame);
  }
}
