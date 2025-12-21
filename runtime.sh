#!/usr/bin/env bash
bun runtime:build

fnm use 22 --install-if-missing
bun runtime:start --runtime node

fnm use 23 --install-if-missing
bun runtime:start --runtime node

fnm use 24 --install-if-missing
bun runtime:start --runtime node

bun upgrade
bun runtime:start --runtime bun

deno upgrade
bun runtime:start --runtime deno
