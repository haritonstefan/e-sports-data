import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';

let app: INestApplication;
let se;

async function getApp(): Promise<INestApplication> {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app = await app.init();
  }

  return app;
}

async function getServer() {
  const app = await getApp();

  if (!se) {
    const expressApp = app.getHttpAdapter().getInstance();

    se = serverlessExpress({ app: expressApp });
  }
  return se;
}

export async function gqlHandler(event, context, callback) {
  const serverlessServer = await getServer();
  return serverlessServer(event, context, callback);
}
