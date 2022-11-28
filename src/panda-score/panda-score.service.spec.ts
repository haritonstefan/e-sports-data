import { Test, TestingModule } from '@nestjs/testing';
import { PandaScoreService } from './panda-score.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { generateTeam, mockAxiosResponse } from './test-helpers';

describe('PandaScoreService', () => {
  let service: PandaScoreService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PandaScoreService],
    }).compile();

    service = module.get<PandaScoreService>(PandaScoreService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('it should call the http module once', async () => {
    const mockTeam = generateTeam(5);
    const spy = jest
      .spyOn(httpService, 'request')
      .mockImplementation(() => mockAxiosResponse(() => mockTeam));

    const data = await service.getTeam(mockTeam.id);

    expect(spy).toHaveBeenCalledTimes(1);

    // Ensure that the mock was called with the correct url
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        url: expect.stringContaining(`teams/${mockTeam.id}`),
      }),
    );

    // Ensure that the returned data was not tampered with
    expect(data).toMatchObject(mockTeam);
  });
});
