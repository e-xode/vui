FROM node:16-alpine3.11

RUN apk add g++ make python
ADD ./run.sh /scripts/run.sh
RUN chmod +x /scripts/*

USER node

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /app

RUN npm install -g npm@latest

EXPOSE 80 443

CMD ["/bin/sh", "/scripts/run.sh"]
