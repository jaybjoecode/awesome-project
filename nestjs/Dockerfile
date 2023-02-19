FROM node:18-alpine3.16 as builder

WORKDIR /nestjs

COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start:dev"]
