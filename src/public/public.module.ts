import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PublicResolver } from './public.resolver.js';
import { PlayerResolver } from './player/player.resolver.js';
import { TeamResolver } from './team/team.resolver.js';
import { VideogameResolver } from './videogame/videogame.resolver.js';
import { PandaScoreModule } from '../panda-score/panda-score.module';
import { WikipediaModule } from '../wikipedia/wikipedia.module';

@Module({
  imports: [
    PandaScoreModule,
    WikipediaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [PublicResolver, PlayerResolver, TeamResolver, VideogameResolver],
})
export class PublicModule {}
