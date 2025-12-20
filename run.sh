#!/usr/bin/env bash
bun task:build

fnm use 22 --install-if-missing
bun task:start --runtime node

fnm use 23 --install-if-missing
bun task:start --runtime node

fnm use 24 --install-if-missing
bun task:start --runtime node

bun upgrade
bun task:start --runtime bun

deno upgrade
bun task:start --runtime deno

git add .
git commit -m "Update results"
git push origin dev
