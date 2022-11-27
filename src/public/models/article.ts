import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field({ description: 'The title of the game.' })
  title!: string;

  @Field({ description: 'An excerpt from the games, wikipedia page' })
  text!: string;
}
