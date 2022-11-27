import {
  Args,
  Context,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Player, Team, Videogame } from '../models';
import { PlayerService } from '../services';
import { IHaveLoaders } from '../dataloaders/i-have-loaders';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Query(() => Player, { description: 'Will return a player by id' })
  async player(@Args('id') id: number): Promise<Player> {
    return this.playerService.getPlayer(id);
  }

  @Query(() => [Player], {
    description:
      'Will return a list of players, with respect to the pagination params',
  })
  async players(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ): Promise<Player[]> {
    return this.playerService.getPlayers(limit, page);
  }

  @ResolveField(() => Team, { name: 'team' })
  async team(@Parent() parent: Player, @Context() context: IHaveLoaders) {
    if (!parent.team?.id) {
      return null;
    }

    return context.teamLoader.load(parent.team.id);
  }

  @ResolveField(() => Videogame, { name: 'videogame' })
  async videogame(@Parent() parent: Player, @Context() context: IHaveLoaders) {
    if (!parent.videogame) return null;
    return context.videogameLoader.load(parent.videogame.id);
  }
}
