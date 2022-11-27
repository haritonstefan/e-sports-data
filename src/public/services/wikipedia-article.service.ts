import { Injectable } from '@nestjs/common';
import { Article } from '../models';
import { WikipediaService } from '../../wikipedia';

@Injectable()
export class WikipediaArticleService {
  constructor(private readonly wikipediaService: WikipediaService) {}

  public async getArticle(title: string): Promise<Article> {
    const article = await this.wikipediaService.getArticle(title);
    if (!article) return null;

    return {
      title: article.title,
      text: article.extract,
    };
  }
}
