import { Field, ObjectType } from '@nestjs/graphql';
import { Participant } from './participant';

@ObjectType()
export class Featured {
  @Field(() => [Participant])
  participants: typeof Participant[];
}
