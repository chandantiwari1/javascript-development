function isSuperSet(seta,setb){
    for(var elem of seta){
        if(!setb.has(elem)){
            return false;
        }
    }
    return true;
}

var seta = new Set([1,2,3,4,5]);
var setb = new Set([1,2,3,4,5]);


console.log(isSuperSet(seta,setb));