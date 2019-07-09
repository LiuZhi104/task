function isStartNumberSmallThanEndNumber(startnumber, endnumber) {
    return startnumber<=endnumber;
}
function isInRangeOfOneToThousand(startnumber, endnumber) {
       return (1<startnumber<1000 && 1<endnumber<1000);
   }

function createMuiltiplicationResult(startnumber, endnumber) {
       var str=" "
       for(var startnumber=2;startnumber<=4;startnumber++)
       {
            for(var endnumber=2;endnumber<=startnumber;endnumber++)
            {
                 str+=endnumber+"*"+startnumber+"="+startnumber*endnumber+"&nbsp;"+"&nbsp;";
             }
    str+="<br />"
    }
    return str;
}
module.exports = isStartNumberSmallThanEndNumber;
module.exports = isInRangeOfOneToThousand;
module.exports = createMuiltiplicationResult;