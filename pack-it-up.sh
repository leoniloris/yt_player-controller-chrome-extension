#!/bin/bash

zip -r package.zip ./ -x "*.DS_Store*" ".git/*" .gitignore "media/*" pack-it-up.sh
