import { Module } from '@nestjs/common';
import { WikipediaService } from './wikipedia.service.js';
import { HttpModule } from '@nestjs/axios';
import { HttpModuleSettingsFactory } from './http-module-settings.factory';

@Module({
  imports: [HttpModule.register(HttpModuleSettingsFactory())],
  providers: [WikipediaService],
  exports: [WikipediaService],
})
export class WikipediaModule {}
