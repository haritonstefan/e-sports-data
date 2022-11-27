import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Player } from './player';
import { PandaScoreService } from '../../panda-score/panda-score.service';
import pandaScorePlayerToPlayer from '../helpers/panda-score-player-to-player';
import { Team } from '../team/team';
import pandaScoreTeamToTeam from '../helpers/panda-score-team-to-team';
import { Videogame } from '../videogame/videogame';
import pandaScoreVideogameToVideogame from '../helpers/panda-score-videogame-to-videogame';

@Resolver(() => Player)
export class PlayerResolver {
  constructor(private readonly pandaScore: PandaScoreService) {}

  @Query(() => Player)
  async player(@Args('id') id: number): Promise<Player> {
    const player = await this.pandaScore.getPlayer(id);
    return pandaScorePlayerToPlayer(player);
  }

  @Query(() => [Player])
  async players(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ): Promise<Player[]> {
    const players = await this.pandaScore.getPlayers(limit, page);

    return players.map(pandaScorePlayerToPlayer);
  }

  @ResolveField(() => Team, { name: 'team' })
  async team(@Parent() parent: Player) {
    if (!parent.team?.id) {
      return null;
    }
    const team = await this.pandaScore.getTeam(parent?.team?.id || 1);

    return pandaScoreTeamToTeam(team);
  }

  @ResolveField(() => Videogame, { name: 'videogame' })
  async videogame(@Parent() parent: Player) {
    if (!parent.videogame) return null;
    const videogame = await this.pandaScore.getVideogame(parent.videogame.id);

    return pandaScoreVideogameToVideogame(videogame);
  }
}
