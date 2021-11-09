# FROM strapi/strapi

# WORKDIR /app

# ENV PORT=8001

FROM node:14-alpine as builder

WORKDIR /app

COPY yarn.lock ./

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:14-alpine

WORKDIR /app


COPY --from=builder /app /app

ENV PORT=8001
ENV DOCKER=true
ENV STRAPI_LOG_LEVEL=debug
EXPOSE ${PORT}

CMD [ "yarn", "start" ]
