import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Team } from './team';
import { Videogame } from './videogame';

@ObjectType({ description: 'Player' })
export class Player {
  @Field(() => ID)
  id!: number;

  @Field()
  slug!: string;

  @Field(() => Int, { nullable: true })
  birthdayYear?: number;

  @Field({ nullable: true })
  birthday?: string;

  @Field(() => Team, { nullable: true })
  team?: Team;

  @Field(() => Videogame, { nullable: true })
  videogame?: Videogame;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  name: string;

  @Field()
  nationality: string;

  @Field({ nullable: true })
  image: string;
}
