FROM node:14-alpine as builder

RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
COPY ./tsconfig.json ./
RUN yarn install
COPY . .
RUN yarn build

# Stage two
FROM node:14-alpine as production
COPY --from=builder /app ./
ENV PORT=3001
EXPOSE 3001
