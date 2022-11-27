import { Module } from '@nestjs/common';

import { PublicResolver } from './public.resolver.js';
import {
  FeaturedResolver,
  PlayerResolver,
  TeamResolver,
  VideogameResolver,
} from './resolvers';
import { PandaScoreModule } from '../panda-score';
import { WikipediaModule } from '../wikipedia';

import {
  PlayerService,
  TeamService,
  VideogameService,
  WikipediaArticleService,
} from './services';
import { FeaturedService } from './services/featured.service';

@Module({
  imports: [PandaScoreModule, WikipediaModule],
  providers: [
    PlayerService,
    TeamService,
    VideogameService,
    WikipediaArticleService,
    FeaturedService,
    FeaturedResolver,
    PublicResolver,
    PlayerResolver,
    TeamResolver,
    VideogameResolver,
  ],

  exports: [PlayerService, TeamService, VideogameService],
})
export class PublicModule {}
