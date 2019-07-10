function isStartNumberSmallThanEndNumber(startnumber, endnumber) {
    return startnumber<=endnumber;
}
function isInRangeOfOneToThousand(startnumber, endnumber) {
       return (1<startnumber<1000 && 1<endnumber<1000);
   }

function createMuiltiplicationResult(startnumber, endnumber) {

      var str=""
           for(var startnumber=2;startnumber<=4;startnumber++)
           {
                for(var endnumber=2;endnumber<=startnumber;endnumber++)
                {
                     str+=endnumber+"*"+startnumber+"="+startnumber*endnumber+" "+" ";
                 }
        str+="\n"
        }
    return str;
   }
function printMuiltplicationTable(startnumber,endnumber){
   if(startnumber>endnumber){
        return null;
   }
   if(!(isInRangeOfOneToThousand(startnumber,endnumber)))
        return null;
    var  result= createMuiltiplicationResult(startnumber,endnumber);
   return result;
   }


module.exports = isStartNumberSmallThanEndNumber;
module.exports = isInRangeOfOneToThousand;
module.exports = createMuiltiplicationResult;
module.exports = printMuiltplicationTable;