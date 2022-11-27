import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Article } from './article';

@ObjectType({ description: 'Videogame' })
export class Videogame {
  @Field(() => ID)
  id: number;

  @Field()
  slug!: string;

  @Field()
  title!: string;

  @Field(() => Article, { nullable: true })
  description?: Article;
}
