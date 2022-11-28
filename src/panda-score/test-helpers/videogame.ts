import { IVideogame } from '../interfaces';
import { faker } from '@faker-js/faker';

export function generateVideogame(): IVideogame {
  return {
    id: faker.datatype.number(),
    name: faker.random.word(),
    slug: faker.random.word(),
  };
}

export function generateVideogames(count: 5): IVideogame[] {
  return Array.from({ length: count }, generateVideogame);
}
