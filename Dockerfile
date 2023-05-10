FROM node:18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install
RUN npm install passport
RUN npm install -g npm@9.6.6
RUN npm install express-session

COPY . .
EXPOSE 3000
CMD [ "node", "server.js"]
