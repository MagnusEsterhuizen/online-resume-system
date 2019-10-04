#!/usr/bin/env sh
set -x
sudo chown -R $USER /usr/local/lib/node_modules
npm install -g serve
npm run build
set +x
