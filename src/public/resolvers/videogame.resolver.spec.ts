import { Test, TestingModule } from '@nestjs/testing';
import { VideogameResolver } from './videogame.resolver';
import { VideogameService, WikipediaArticleService } from '../services';
import { PandaScoreService } from '../../panda-score';
import { WikipediaService } from '../../wikipedia';

describe('VideogameResolver', () => {
  let resolver: VideogameResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PandaScoreService,
          useValue: jest.fn(),
        },
        {
          provide: WikipediaService,
          useValue: jest.fn(),
        },
        VideogameService,
        VideogameResolver,
        WikipediaArticleService,
      ],
    }).compile();

    resolver = module.get<VideogameResolver>(VideogameResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
