import request from 'supertest';
import * as superagent from 'superagent';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '../src/app.module';

describe('GraphQL Resolver (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('teams', () => {
    it('should request for 1 team', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `{teams(limit: 2, page: 1) {id name acronym players { id } }}`,
        })
        .expect(async (res: superagent.Response) => {
          expect(res.status).toEqual(200);
          expect(res.body).toHaveProperty('data');
          expect(res.body.data).toMatchObject({
            teams: [
              {
                id: expect.stringContaining(''),
                name: expect.stringContaining(''),
                acronym: expect.stringContaining(''),
              },
              {
                id: expect.stringContaining(''),
                name: expect.stringContaining(''),
                acronym: expect.stringContaining(''),
              },
            ],
          });
        });
    });
  });
});
