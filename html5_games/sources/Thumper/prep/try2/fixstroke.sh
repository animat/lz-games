#!/bin/bash

rm -f ~/test.args
for i in src/*.svg
do
file=`basename $i`
gawk -f xf.awk $i > out/$file
done
