import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Player } from './player';
import { Videogame } from './videogame';

@ObjectType({ description: 'Team' })
export class Team {
  @Field(() => ID)
  id: number;

  @Field({ nullable: false })
  slug!: string;

  @Field({ nullable: true })
  acronym?: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => [Player], { nullable: true })
  players?: Player[];

  @Field(() => Videogame, { nullable: true })
  videogame?: Videogame;
}
