## E-Sports Data

A GraphQL server exposing e-sport matches data
from [panda score](https://developers.pandascore.co/reference/get_players), enriched with game info
from [Wikipedia](https://en.wikipedia.org/w/api.php).

As a framework for this project [NestJS](https://docs.nestjs.com/graphql/quick-start) was used for the following
reasons:

1. It's a full-fledged framework, enabling DI and app structure out of the box.
2. It allows for a code first approach when developing GQL, which provides better DX.

Under NestJS, the GraphQL implementation library is Apollo GraphQl Server

## Structure

The project consists of the following 3 modules:

1. [PandaScore](src/panda-score/panda-score.module.ts) which exposes a service for interacting with the pandascore api
2. [Wikipedia](src/wikipedia/wikipedia.module.ts) which exposes a service for interacting with the wikipedia api
3. [Public](src/public/public.module.ts) (not the best name) is host to the graphql resolvers, which leverage the
   services from the other 2 modules

## Running

There are 3 ways of running this project, but the next step is common for all of them:

An env file should be created and populated with `PANDA_SCORE_API_KEY`

```shell
cp ./template.env ./env
```

### Directly using node js

```shell
npm install
npm start
```

### Through Docker

```shell
### In prod mode (no playground and no introspection) 
docker build -t e-sports-data --target prod .
### In dev mode (with playground and introspection)
docker build -t e-sports-data --target dev .

docker run --name e-sports-data -dp 3000:3000 e-sports-data
```

### Through Docker Compose

Docker compose is assumed for local development, thus it's in dev environment, and runs the code through a watcher,
allowing for hot reload.

```shell
docker-compose up
```

## Tests

The coverage with tests is low. For a POC of how this would be tested, the following test files were written:

1. [Panda Score Service](src/panda-score/panda-score.service.spec.ts). It's a unit test which mocks the https calls to
   panda score, and leverages the [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) library for mocked
   data.
2. [Teams e2e Test](test/teams.e2e-spec.ts). It's a test showing how e2e test can be achieved in this codebase.


### Running the tests
```shell
### for unit tests
npm test

### for e2e tests
npm run test:e2e
```