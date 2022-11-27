import { createUnionType } from '@nestjs/graphql';
import { Team } from './team';
import { Player } from './player';

export const Participant = createUnionType({
  name: 'Participant',
  types: () => [Player, Team] as const,
  resolveType(value) {
    // TODO: Make a smarter discrimination here
    if (value.firstName || value.lastName || value.birthday) {
      return Player;
    }
    return Team;
  },
});
