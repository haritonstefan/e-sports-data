import { ConfigService } from '@nestjs/config';
import { HttpModuleOptions } from '@nestjs/axios';

export function HttpModuleSettingsFactory(
  configService: ConfigService,
): HttpModuleOptions {
  return {
    validateStatus: () => true,
    baseURL: 'https://api.pandascore.co/',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${configService.get<string>(
        'PANDA_SCORE_API_KEY',
      )}`,
    },
  };
}
