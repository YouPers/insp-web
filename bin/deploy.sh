#!/bin/bash
set -e
cd /home/youpers/insp-web
git pull origin $1
export NODE_ENV=$2
npm install
grunt build
sudo /usr/sbin/service nginx  restart