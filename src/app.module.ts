import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PandaScoreModule } from './panda-score';
import { WikipediaModule } from './wikipedia';
import { PublicModule } from './public/public.module.js';
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
      inject: [PlayerService, TeamService, VideogameService],
      useFactory: GraphqlOptionsFactory,
    }),
    PandaScoreModule,
    WikipediaModule,
    PublicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
