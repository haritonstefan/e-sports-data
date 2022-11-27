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

@Resolver(() => Player)
export class PlayerResolver {
  constructor(
    private readonly playerService: PlayerService,
    private readonly teamService: TeamService,
    private readonly videogameService: VideogameService,
  ) {}

  @Query(() => Player)
  async player(@Args('id') id: number): Promise<Player> {
    return this.playerService.getPlayer(id);
  }

  @Query(() => [Player])
  async players(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ): Promise<Player[]> {
    return this.playerService.getPlayers(limit, page);
  }

  @ResolveField(() => Team, { name: 'team' })
  async team(@Parent() parent: Player) {
    if (!parent.team?.id) {
      return null;
    }

    return this.teamService.getTeam(parent.team.id);
  }

  @ResolveField(() => Videogame, { name: 'videogame' })
  async videogame(@Parent() parent: Player) {
    if (!parent.videogame) return null;
    return this.videogameService.getVideogame(parent.videogame.id);
  }
}
