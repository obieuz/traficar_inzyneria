FROM node:latest

VOLUME /api

WORKDIR /api

COPY package*.json ./

RUN npm install

EXPOSE 3000:3000

RUN node bin/www


