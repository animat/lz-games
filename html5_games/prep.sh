#!/bin/bash

sudo chown -R  $USER:$USER .
find  sources -type d -exec chmod 755  {} \;
find  sources -type f -exec chmod 644  {} \;
npm install
