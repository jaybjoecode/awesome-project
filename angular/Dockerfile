FROM node:18-alpine3.16 as builder

RUN mkdir /angular
WORKDIR /angular

RUN npm install -g @angular/cli@15

COPY package.json package-lock.json ./
RUN npm i

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]