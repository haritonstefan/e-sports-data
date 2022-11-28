import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PandaScoreModule } from './panda-score';
import { WikipediaModule } from './wikipedia';
import { PublicModule } from './public/public.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import {
  PlayerService,
  TeamService,
  VideogameService,
} from './public/services';
import { GraphqlOptionsFactory } from './public/graphql-options.factory';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync({
      imports: [PublicModule],
      driver: ApolloDriver,
      inject: [ConfigService, PlayerService, TeamService, VideogameService],
      useFactory: GraphqlOptionsFactory,
    }),
    PandaScoreModule,
    WikipediaModule,
    PublicModule,
  ],
})
export class AppModule {}
