FROM node:22-alpine3.19 AS builder

ENV NODE_ENV=production
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN mkdir -p /app
ADD . /app

WORKDIR /app

RUN mkdir /home/node/.npm-global
RUN npm install -g npm@latest
RUN npm install --production=false
RUN npm run build

# ----------------------------------------

FROM node:22-alpine3.19 AS runner

ENV NODE_PORT=3001

RUN apk update
RUN apk --no-cache add nginx supervisor

EXPOSE $NODE_PORT

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/
COPY ./docker/build/config/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/build/config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
