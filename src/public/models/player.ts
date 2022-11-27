import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Team } from './team';
import { Videogame } from './videogame';

@ObjectType({ description: 'Player' })
export class Player {
  @Field(() => ID, { description: 'The unique identifier of the player' })
  id!: number;

  @Field({ description: 'A string value uniquely identifying a player' })
  slug!: string;

  @Field(() => Int, {
    description: "Player's birthday year computed from the birthday",
    nullable: true,
  })
  birthdayYear?: number;

  @Field({
    description: 'String date representation of the format YYYY-MM-dd',
    nullable: true,
  })
  birthday?: string;

  @Field(() => Team, {
    description: 'The team in which the player competes',
    nullable: true,
  })
  team?: Team;

  @Field(() => Videogame, {
    description: 'The videogame in which the player plays.',
    nullable: true,
  })
  videogame?: Videogame;

  @Field({ description: "Player's first name" })
  firstName: string;

  @Field({ description: "Player's last name" })
  lastName: string;

  @Field({ description: "Player's nickname" })
  name: string;

  @Field({ description: "Player's nationality" })
  nationality: string;

  @Field({ description: "An url to the player's avatar", nullable: true })
  image: string;
}
