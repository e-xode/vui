FROM node:22-alpine3.19

ENV NODE_ENV=development
ENV NODE_PORT=3001
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ADD ./run.sh /scripts/run.sh
RUN chmod +x /scripts/*

USER node

WORKDIR /app

RUN mkdir /home/node/.npm-global
RUN npm install -g npm@latest

EXPOSE $NODE_PORT

CMD ["/bin/sh", "/scripts/run.sh"]
