import { Test, TestingModule } from '@nestjs/testing';
import { VideogameResolver } from './videogame.resolver';

describe('VideogameResolver', () => {
  let resolver: VideogameResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideogameResolver],
    }).compile();

    resolver = module.get<VideogameResolver>(VideogameResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
