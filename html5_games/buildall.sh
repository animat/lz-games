#!/bin/bash

echo "$0: Building: Server"
gulp build_svr


echo "$0: Building: Lib"
gulp build_lib


for child in sources/*
do
  if [ -d "$child" ]; then 
  if [ "$child" != "sources/lib" ] && [ "$child" != "sources/svr" ]; then
  echo "$0: Processing: $child"
  echo "cd $child; gulp build_game;" |bash
  fi
  fi
done
echo "$0: Build completed"

bash cksum.sh
