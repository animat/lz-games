
{
    for(i=1;i<=NF;i++) {
        if ($i~"fill=") {
            split($i, subfield, "\"");
            color=subfield[2];
            #printf "(%s)", color;

        }
        if ($i~"stroke=") {
            split($i, subfield, "\"");
            sub(/none/,color,$i)
            #printf "(%s)", $i;
        }
     }; 
     printf $0, "\n"
}
