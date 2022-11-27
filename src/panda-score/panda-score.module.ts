import { Module } from '@nestjs/common';
import { PandaScoreService } from './panda-score.service.js';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpModuleSettingsFactory } from './http-module-settings.factory';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: HttpModuleSettingsFactory,
    }),
  ],
  providers: [PandaScoreService],
  exports: [PandaScoreService],
})
export class PandaScoreModule {}
