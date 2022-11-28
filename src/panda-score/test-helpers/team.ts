import { ITeam } from '../interfaces';
import { faker } from '@faker-js/faker';
import { generateVideogame } from './videogame';
import { generatePlayers } from './player';

export function generateTeam(players = 0): ITeam {
  return {
    id: faker.datatype.number(),
    name: faker.random.word(),
    acronym: faker.random.word(),
    location: faker.random.word(),
    slug: faker.random.word(),
    modified_at: faker.date.recent(3),
    image_url: faker.internet.url(),
    current_videogame: generateVideogame(),
    players: players > 0 ? generatePlayers(5) : [],
  };
}

export function generateTeams(count: number) {
  return Array.from({ length: count }, () => generateTeam(4));
}
