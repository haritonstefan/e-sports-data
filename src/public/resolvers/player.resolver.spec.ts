import { Test, TestingModule } from '@nestjs/testing';
import { PlayerResolver } from './player.resolver';
import { PlayerService } from '../services';
import { PandaScoreService } from '../../panda-score';

describe('PlayerResolver', () => {
  let resolver: PlayerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PandaScoreService,
          useValue: jest.fn(),
        },
        PlayerService,
        PlayerResolver,
      ],
    }).compile();

    resolver = module.get<PlayerResolver>(PlayerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
