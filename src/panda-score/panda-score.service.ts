import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import { IPlayer, ITeam, IVideogame } from './interfaces';

@Injectable()
export class PandaScoreService {
  constructor(private readonly httpService: HttpService) {}

  private async requestPromise(config: AxiosRequestConfig) {
    const response = await firstValueFrom(this.httpService.request(config));
    return response.data;
  }

  public async getPlayer(id: number): Promise<IPlayer> {
    return this.requestPromise({ method: 'get', url: `player/${id}` });
  }

  public async getPlayers(
    perPage: number,
    page: number,
    params: Record<string, any>,
  ): Promise<IPlayer[]> {
    return this.requestPromise({
      method: 'get',
      url: 'players',
      params: { ...params, page, per_page: perPage },
    });
  }

  async getPlayersByIds(ids: number[]): Promise<IPlayer[]> {
    return this.requestPromise({
      method: 'get',
      url: 'players',
      params: { id: ids },
    });
  }

  public async getTeam(id: number): Promise<ITeam> {
    return this.requestPromise({ method: 'get', url: `teams/${id}` });
  }

  public async getTeams(
    perPage: number,
    page: number,
    params: any,
  ): Promise<ITeam[]> {
    return this.requestPromise({
      method: 'get',
      url: 'teams',
      params: { ...params, page, per_page: perPage },
    });
  }

  public async getVideogame(id: number): Promise<IVideogame> {
    return this.requestPromise({ method: 'get', url: `videogames/${id}` });
  }

  public async getVideogames(
    limit: number,
    page: number,
  ): Promise<IVideogame[]> {
    return this.requestPromise({
      method: 'get',
      url: 'videogames',
      params: { page, per_page: limit },
    });
  }
}
