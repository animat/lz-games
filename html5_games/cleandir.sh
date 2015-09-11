#!/bin/bash


dir=$1
del=$dir.del
if [ -z "$dir" ]; then
    echo "$0: Empty parm dir: $dir"
    exit 1
fi
echo "$0: Cleaning: $dir"
if [ -d "$del" ]; then
   echo "$0:  - Removing stale $del"
   rm -rf $del
fi
if [ -d "$dir" ]; then
   bdel=`basename $del`
   echo "$0:  - Moving $dir to $bdel"
   mv $dir $del
else
   echo "$0:  - Dir not found: $dir"
fi
if [ -d "$del" ]; then
   echo "$0:  - Removing $del"
   rm -rf $del
fi
echo "$0: Syncing filesystem"
sync
echo "$0: Pausing 5 seconds"
sleep 5 

