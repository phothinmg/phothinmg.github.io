#!/usr/bin/env bash
set -euo pipefail

# rm -rf vendor
# rm -rf .bundle
# rm -rf Gmefile.lock

# Force bundler to use vendor/bundle locally
bundle config set --local path 'vendor/bundle'
bundle config set --local system_gems false

# add to .gitignore
# echo "# add bundle source" >> .gitignore
# echo "vendor/bundle/" >> .gitignore
# echo ".bundle/" >> .gitignore

# install
bundle install