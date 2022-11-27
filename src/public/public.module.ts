import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

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
  imports: [
    PandaScoreModule,
    WikipediaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
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
})
export class PublicModule {}
