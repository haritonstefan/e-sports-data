import { Field, ObjectType } from '@nestjs/graphql';
import { Participant } from './participant';

@ObjectType()
export class Featured {
  @Field(() => [Participant], {
    description: 'A shuffled list of recently updated players and teams',
  })
  participants: typeof Participant[];
}
