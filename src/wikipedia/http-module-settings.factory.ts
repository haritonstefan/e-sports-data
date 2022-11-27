import { HttpModuleOptions } from '@nestjs/axios';

export function HttpModuleSettingsFactory(): HttpModuleOptions {
  return {
    baseURL: 'https://en.wikipedia.org/w/api.php',
    headers: {
      accept: 'application/json',
    },
    params: {
      format: 'json',
      action: 'query',
      prop: 'extracts',
      redirects: 1,
    },
  };
}
