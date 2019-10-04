#!/usr/bin/env sh
set -x
chmod -R 775 /usr/local/lib/node_modules
npm install -g serve
npm run build
set +x
