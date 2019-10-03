#!/usr/bin/env sh
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Please browse http://localhost:3000 to see UAT environment.'
