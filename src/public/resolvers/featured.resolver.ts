import { Query, Resolver } from '@nestjs/graphql';
import { Featured } from '../models/featured';
import { FeaturedService } from '../services/featured.service';

@Resolver(() => Featured)
export class FeaturedResolver {
  constructor(private readonly featuredService: FeaturedService) {}

  @Query(() => Featured)
  public async featured() {
    return this.featuredService.getFeatured();
  }
}
