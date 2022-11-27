import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PublicResolver } from './public.resolver.js';
import { PlayerResolver } from './resolvers/player.resolver';
import { TeamResolver } from './resolvers/team.resolver';
import { VideogameResolver } from './resolvers/videogame.resolver';
import { PandaScoreModule } from '../panda-score';
import { WikipediaModule } from '../wikipedia';
import {
  PlayerService,
  TeamService,
  VideogameService,
  WikipediaArticleService,
} from './services';

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
    PublicResolver,
    PlayerResolver,
    TeamResolver,
    VideogameResolver,
  ],
})
export class PublicModule {}
