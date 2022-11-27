import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import {
  createPlayerLoader,
  createTeamLoader,
  createVideogameLoader,
} from './dataloaders';
import { PlayerService, TeamService, VideogameService } from './services';

export function GraphqlOptionsFactory(
  playerService: PlayerService,
  teamService: TeamService,
  videogameService: VideogameService,
): ApolloDriverConfig {
  return {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    context: {
      playerLoader: createPlayerLoader(playerService),
      teamLoader: createTeamLoader(teamService),
      videogameLoader: createVideogameLoader(videogameService),
    },
  };
}
