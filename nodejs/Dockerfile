FROM node:18-alpine3.16 as builder

WORKDIR /nodejs

COPY package.json package-lock.json ./
RUN npm i
COPY . .

EXPOSE 5000

CMD ["npm","start"]