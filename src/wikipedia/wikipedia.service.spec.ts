import { Test, TestingModule } from '@nestjs/testing';
import { WikipediaService } from './wikipedia.service';
import { HttpModule } from '@nestjs/axios';

describe('WikipediaService', () => {
  let service: WikipediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [WikipediaService],
    }).compile();

    service = module.get<WikipediaService>(WikipediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
