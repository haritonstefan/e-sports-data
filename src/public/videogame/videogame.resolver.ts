import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PandaScoreService } from '../../panda-score/panda-score.service';
import { WikipediaService } from '../../wikipedia/wikipedia.service';
import { Videogame } from './videogame';
import { Article } from './article';
import pandaScoreVideogameToVideogame from '../helpers/panda-score-videogame-to-videogame';

@Resolver(() => Videogame)
export class VideogameResolver {
  constructor(
    private readonly pandaScoreService: PandaScoreService,
    private readonly wikipediaService: WikipediaService,
  ) {}

  @Query(() => Videogame)
  public async videogame(@Args('id') id: number) {
    const videogame = await this.pandaScoreService.getVideogame(id);
    return pandaScoreVideogameToVideogame(videogame);
  }

  @Query(() => [Videogame])
  public async videogames(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ) {
    const videogames = await this.pandaScoreService.getVideogames(limit, page);

    return videogames.map(pandaScoreVideogameToVideogame);
  }

  @ResolveField()
  public async description(@Parent() videogame: Videogame): Promise<Article> {
    const article = await this.wikipediaService.getArticle(videogame.title);
    if (!article) return null;

    return {
      title: article.title,
      text: article.extract,
    };
  }
}
