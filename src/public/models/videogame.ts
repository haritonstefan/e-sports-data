import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Article } from './article';

@ObjectType({ description: 'Videogame' })
export class Videogame {
  @Field(() => ID, { description: 'The unique identifier of the videogame' })
  id: number;

  @Field({ description: 'A string value uniquely identifying the videogame' })
  slug!: string;

  @Field({ description: 'The title of the videogame' })
  title!: string;

  @Field(() => Article, {
    description: 'More information about the game',
    nullable: true,
  })
  description?: Article;
}
