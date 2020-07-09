FROM node:10-alpine

WORKDIR /opt/app

RUN npm install pm2 -g

COPY docker/supervisor/nodejs.ini /etc/supervisor.d/nodejs.ini
COPY --chown=node:node . /usr/src/app/

USER root

ENV NODE_ENV production

COPY package*.json ./

RUN npm ci 

COPY . /opt/app

RUN npm install --only=dev && npm run build

COPY docker/entrypoint.sh /entrypoint.sh

CMD [ "npm", "start" ]
