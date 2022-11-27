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
import { TeamService } from '../services';
import { IHaveLoaders } from '../dataloaders/i-have-loaders';

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => Team, {
    name: 'team',
    description: 'Will get the requested team',
  })
  public async team(@Args('id') id: number) {
    return this.teamService.getTeam(id);
  }

  @Query(() => [Team], {
    name: 'teams',
    description: 'Will retrieve a list of teams',
  })
  public async teams(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ) {
    return this.teamService.getTeams(limit, page);
  }

  @ResolveField(() => [Player], { name: 'players' })
  public async players(@Parent() team: Team, @Context() context: IHaveLoaders) {
    if (!team.players) return null;

    return context.playerLoader.loadMany(team.players.map((p) => p.id));
  }

  @ResolveField(() => Videogame, { name: 'videogame' })
  public async videogame(
    @Parent() team: Team,
    @Context() context: IHaveLoaders,
  ) {
    if (!team.videogame) return null;

    return context.videogameLoader.load(team.videogame.id);
  }
}
