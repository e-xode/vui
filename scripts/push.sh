#!/bin/sh
$VUI_VERSION=$(sed -nr 's/^\s*\"version": "([0-9]{1,}\.[0-9]{1,}.*)",$/\1/p' package.json)
echo "VUI VERSION: $VUI_VERSION"
docker push krisae/e-xode.vui:latest
