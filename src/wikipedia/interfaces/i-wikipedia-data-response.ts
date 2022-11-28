import { IWikipediaArticle } from './i-wikipedia-article';

export interface IWikipediaDataResponse {
  query: {
    pages: {
      [key: number]: IWikipediaArticle;
    };
  };
}
