import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Player, Team, Videogame } from '../models';
import { PlayerService, TeamService, VideogameService } from '../services';

@Resolver(() => Team)
export class TeamResolver {
  constructor(
    private readonly teamService: TeamService,
    private readonly playerService: PlayerService,
    private readonly videogameService: VideogameService,
  ) {}

  @Query(() => Team, { name: 'team' })
  public async team(@Args('id') id: number) {
    return this.teamService.getTeam(id);
  }

  @Query(() => [Team], { name: 'teams' })
  public async teams(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ) {
    return this.teamService.getTeams(limit, page);
  }

  @ResolveField(() => [Player], { name: 'players' })
  public async players(@Parent() team: Team) {
    if (!team.players) return null;

    return this.playerService.getPlayersByIds(team.players.map((p) => p.id));
  }

  @ResolveField(() => Videogame, { name: 'videogame' })
  public async videogame(@Parent() team: Team) {
    if (!team.videogame) return null;

    return this.videogameService.getVideogame(team.videogame.id);
  }
}
