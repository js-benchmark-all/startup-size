#!/usr/bin/env bash
bun startup:build

fnm use 22 --install-if-missing
bun startup:start --runtime node

fnm use 23 --install-if-missing
bun startup:start --runtime node

fnm use 24 --install-if-missing
bun startup:start --runtime node

bun upgrade
bun startup:start --runtime bun

deno upgrade
bun startup:start --runtime deno

git add .
git commit -m "Update results"
git push origin dev
