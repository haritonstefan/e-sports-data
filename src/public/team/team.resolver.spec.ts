import { Test, TestingModule } from '@nestjs/testing';
import { TeamResolver } from './team.resolver.js';

describe('TeamResolver', () => {
  let resolver: TeamResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamResolver],
    }).compile();

    resolver = module.get<TeamResolver>(TeamResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});