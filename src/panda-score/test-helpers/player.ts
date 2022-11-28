import { IPlayer, ITeam } from '../interfaces';
import { faker } from '@faker-js/faker';
import { generateVideogame } from './videogame';
import { generateTeam } from './team';

export function generatePlayer(withTeam: boolean, team: ITeam = null): IPlayer {
  const age = faker.datatype.number({ min: 14, max: 99 });
  return {
    id: faker.datatype.number(),
    slug: faker.random.word(),
    name: faker.random.word(),
    current_videogame: generateVideogame(),
    age,
    birthday: faker.date.past(age).toDateString(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    nationality: faker.random.locale(),
    image_url: faker.internet.avatar(),
    current_team: team ? generateTeam(0) : null,
  };
}

export function generatePlayers(count: number, withTeam = false): IPlayer[] {
  return Array.from({ length: count }, () => generatePlayer(withTeam));
}
