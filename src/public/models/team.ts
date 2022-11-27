import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Player } from './player';
import { Videogame } from './videogame';

@ObjectType({ description: 'Team' })
export class Team {
  @Field(() => ID, { description: 'The unique identifier of the team' })
  id: number;

  @Field({ description: 'A string value uniquely identifying the team' })
  slug!: string;

  @Field({ description: 'An acronym for the team', nullable: true })
  acronym?: string;

  @Field({ description: "The team's name", nullable: true })
  name: string;

  @Field({ description: "The team's location", nullable: true })
  location: string;

  @Field({ description: 'An url to the teams logo', nullable: true })
  image: string;

  @Field(() => [Player], {
    description: 'The players that ar in the team',
    nullable: true,
  })
  players?: Player[];

  @Field(() => Videogame, {
    description: 'The game in which the team competes',
    nullable: true,
  })
  videogame?: Videogame;
}
