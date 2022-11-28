import { Test, TestingModule } from '@nestjs/testing';
import { TeamResolver } from './team.resolver';
import { TeamService } from '../services';
import { PandaScoreService } from '../../panda-score';

describe('TeamResolver', () => {
  let resolver: TeamResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PandaScoreService,
          useValue: jest.fn(),
        },
        TeamService,
        TeamResolver,
      ],
    }).compile();

    resolver = module.get<TeamResolver>(TeamResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
