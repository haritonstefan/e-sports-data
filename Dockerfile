FROM node:hydrogen-alpine as dev

USER node

WORKDIR /app

COPY . .

RUN npm ci --include=dev

EXPOSE $PORT

CMD ["npm", "run", "start:dev"]

FROM node:hydrogen-alpine as build

USER node

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM node:hydrogen-alpine as prod

USER node

WORKDIR app

COPY --from=build /app/.env /app/.env
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json

ENV NODE_ENV=production
RUN npm ci

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]