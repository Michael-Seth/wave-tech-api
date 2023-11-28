FROM node:18-alpine

WORKDIR /src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start:dev"]