#!/bin/sh
docker run -d \
--restart=unless-stopped \
--mount type=bind,source="$(pwd)/logs",target=/app/logs \
--network e-xode --name e-xode.vui -p 127.0.0.1:3001:3001 krisae/e-xode.vui:latest
