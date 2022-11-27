import { Query, Resolver } from '@nestjs/graphql';
import { Featured } from '../models';
import { FeaturedService } from '../services/featured.service';

@Resolver(() => Featured)
export class FeaturedResolver {
  constructor(private readonly featuredService: FeaturedService) {}

  @Query(() => Featured, {
    description:
      'Will retrieve a shuffled list of players and teams which were last modified',
  })
  public async featured() {
    return this.featuredService.getFeatured();
  }
}
