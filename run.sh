#!/usr/bin/env bash
bun task:build

fnm use 22 --install-if-missing
bun task:start node

fnm use 23 --install-if-missing
bun task:start node

fnm use 24 --install-if-missing
bun task:start node

bun upgrade
bun task:start bun

deno upgrade
bun task:start deno

git add .
git commit -m "Update results"
git push origin dev
