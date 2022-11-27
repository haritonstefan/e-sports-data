import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Article, Videogame } from '../models';
import { VideogameService, WikipediaArticleService } from '../services';

@Resolver(() => Videogame)
export class VideogameResolver {
  constructor(
    private readonly videogameService: VideogameService,
    private readonly wikipediaArticleService: WikipediaArticleService,
  ) {}

  @Query(() => Videogame, {
    name: 'videogame',
    description: 'Will retrieve the game by id.',
  })
  public async videogame(@Args('id') id: number) {
    return this.videogameService.getVideogame(id);
  }

  @Query(() => [Videogame], {
    name: 'videogames',
    description: 'Will retrieve a list of videogames',
  })
  public async videogames(
    @Args('limit', { nullable: true, type: () => Int }) limit = 50,
    @Args('page', { nullable: true, type: () => Int }) page = 1,
  ) {
    return this.videogameService.getVideogames(limit, page);
  }

  @ResolveField()
  public async description(@Parent() videogame: Videogame): Promise<Article> {
    return this.wikipediaArticleService.getArticle(videogame.title);
  }
}
