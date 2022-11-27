export interface IWikipediaArticle {
  pageid: number;
  title: string;
  extract: string;
}

export interface IWikipediaDataResponse {
  query: {
    pages: {
      [key: number]: IWikipediaArticle;
    };
  };
}
