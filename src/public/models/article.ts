import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field()
  title!: string;

  @Field()
  text!: string;
}
