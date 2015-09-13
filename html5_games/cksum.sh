#!/bin/bash

echo "$0: Running checksum audit"
echo "$0: Creating checksums"
find sources/*/min -type f | xargs cksum > cksum.out
find build -type f | egrep -v "svr" | xargs cksum  >> cksum.out

touch cksum.cmp

echo "$0: Comparing cksum.out against cksum.cmp"
diff cksum.cmp cksum.out > cksum.diff
rc="$?"

echo "$0: Return Code = $rc"
if [ "$rc" -ne "0" ]; then
echo "$0: Checksums did not match. See cksum.diff"
else
echo "$0: Checksums matched"
fi
echo "$0: Checksum audit completed"
