FROM node:24-alpine AS builder

ENV NODE_ENV=production
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN mkdir -p /app
ADD . /app

WORKDIR /app

RUN mkdir /home/node/.npm-global
RUN npm install -g npm@latest
# `npm ci`, not `npm install`: the latter re-resolves semver ranges at build time and freezes at
# the mercy of the Docker layer cache, so the image can ship something other than what the
# lockfile describes — which is what Dependabot and CI actually audit. `--include=dev` is
# required: NODE_ENV=production above would otherwise drop the devDependencies `npm run build`
# needs. See e-xode/scripts#9.
RUN npm ci --include=dev
RUN npm run build

# ----------------------------------------

FROM node:24-alpine AS runner

ENV NODE_PORT=3001

RUN apk update
RUN apk --no-cache add nginx supervisor

EXPOSE $NODE_PORT

WORKDIR /app

COPY --from=builder /app/dist/ /app/dist/
COPY ./docker/build/config/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/build/config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Run the whole container as the built-in non-root `node` user (UID/GID 1000) instead of root.
# vui serves only static docs via nginx (no node runtime). Own /app + the nginx state/log dirs so
# the unprivileged nginx (master + worker) can write; supervisord + nginx pidfiles move /run → /tmp.
# The bind-mounted /app/logs must be 1000:1000 on the host (applied by deploy.e-xode.vui.sh).
RUN mkdir -p /app/logs /var/log/nginx && \
    chown -R node:node /app /home/node /var/log/nginx /var/lib/nginx
USER node

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
