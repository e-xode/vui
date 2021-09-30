#!/bin/sh
docker run -d --mount type=bind,source="$(pwd)/logs",target=/app/logs --network e-xode --name e-xode.vui -p 3001:3001 krisae/e-xode.vui:latest
