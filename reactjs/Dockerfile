FROM node:18-alpine3.16 as builder

WORKDIR /reactjs

COPY package.json package-lock.json ./
RUN npm i
COPY . .

EXPOSE 3000

CMD ["npm","start"]