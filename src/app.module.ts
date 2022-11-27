import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PandaScoreModule } from './panda-score/panda-score.module.js';
import { WikipediaModule } from './wikipedia/wikipedia.module.js';
import { PublicModule } from './public/public.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PandaScoreModule,
    WikipediaModule,
    PublicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
