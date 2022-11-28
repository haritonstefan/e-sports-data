import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { join } from 'path';
import {
  createPlayerLoader,
  createTeamLoader,
  createVideogameLoader,
} from './dataloaders';
import { PlayerService, TeamService, VideogameService } from './services';
import { ConfigService } from '@nestjs/config';

export function GraphqlOptionsFactory(
  configService: ConfigService,
  playerService: PlayerService,
  teamService: TeamService,
  videogameService: VideogameService,
): ApolloDriverConfig {
  const isProd = configService.get('NODE_ENV') == 'production';

  return {
    driver: ApolloDriver,
    // TODO: move to redis
    cache: new InMemoryLRUCache({
      maxSize: Math.pow(2, 20) * 100,
      ttl: 300_000,
    }),
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // Disabled the playground if running in prod
    playground: !isProd,
    // Disabling introspection in prod is a good practice.
    introspection: !isProd,
    context: {
      playerLoader: createPlayerLoader(playerService),
      teamLoader: createTeamLoader(teamService),
      videogameLoader: createVideogameLoader(videogameService),
    },
  };
}
