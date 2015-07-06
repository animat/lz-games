#!/bin/bash

gid=`id -g`

echo "$0:  Creating/Updating /LZGAMESRC symlink for native compile"
sudo rm -f /LZGAMESRC
sudo ln -s `pwd`/sources /LZGAMESRC

echo "$0:  Changing ownership to $USER:$gid"
sudo chown -R  $USER:$gid .
echo "$0: Setting folder permisisons"
find  sources -type d -exec chmod 755  {} \;
echo "$0: Setting file permisisons"
find  sources -type f -exec chmod 644  {} \;
echo "$0: Installing npm modules"
rm -f npm.out
npm install | tee npm.out
. ./build.env
rm -f build.out
gulp build_all 2>&1 | tee build.out
