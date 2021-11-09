
FROM node:14-alpine as builder

# RUN mkdir -p /app

WORKDIR /app
COPY yarn.lock ./
COPY package*.json ./

RUN yarn install 
COPY . .
RUN yarn build


FROM node:14-alpine as production
WORKDIR /app
COPY --from=builder /app /app

ENV PORT=8000
ENV DOCKER=true


EXPOSE ${PORT}

# CMD [ "yarn", "start:prod" ]

