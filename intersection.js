// this is th intersection of set si the javascritp 
function intersectSets(setA,setB){
    var intersection = new Set();
    for(var elem of setA){
        if(setA.has(elem)){
            intersection.add(elem);
        }
    }
    return elem;
}

var SetA =new Set([1,23,4,45,5,5]);
var SetB =new Set([1,23,43,45,3]);

console.log(intersectSets(SetA,SetB));