#!/usr/bin/env sh
set -eu
npm ci
npm run build
printf '\nUpload the contents of out/ to Hostinger public_html/.\n'
