FROM node:16-alpine3.11 AS builder

ARG NODE_ENV=production

RUN apk add g++ make python

RUN mkdir -p /app
ADD . /app

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /app

RUN npm install -g npm@latest
RUN npm install
RUN npm run build

# ----------------------------------------

FROM node:16-alpine3.11 AS runner

RUN apk update
RUN apk --no-cache add nginx supervisor

EXPOSE 3001

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/
COPY ./docker/build/config/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/build/config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
