#!/bin/bash

gid=`id -g`

echo "$0:  Changing ownership to $USER:$gid"
sudo chown -R  $USER:$gid .
echo "$0: Setting folder permisisons"
find  sources -type d -exec chmod 755  {} \;
echo "$0: Setting file permisisons"
find  sources -type f -exec chmod 644  {} \;
echo "$0: Installing npm modules"
npm install
gulp build_all
