import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IWikipediaArticle, IWikipediaDataResponse } from './interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WikipediaService {
  constructor(private readonly httpService: HttpService) {}

  public async getArticle(title: string): Promise<IWikipediaArticle> {
    const response = await firstValueFrom(
      this.httpService.get<IWikipediaDataResponse>('/', {
        params: {
          explaintext: true,
          exchars: 400,
          titles: title,
        },
      }),
    );

    if (!response.data?.query?.pages) {
      return null;
    }

    const pageKey = Object.keys(response.data.query.pages).shift();

    return response.data.query.pages[pageKey];
  }
}
