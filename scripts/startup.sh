#!/usr/bin/env bash
bun startup:build --runtime node

fnm use 22 --install-if-missing
bun startup:start --runtime node

fnm use 23 --install-if-missing
bun startup:start --runtime node

fnm use 24 --install-if-missing
bun startup:start --runtime node

bun upgrade
bun startup:build --runtime bun
bun startup:start --runtime bun

deno upgrade
bun startup:build --runtime deno
bun startup:start --runtime deno
