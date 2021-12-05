// we use bit for the hight performance code 
// zero fill right shift operatior in the javascript 
// >>> is the triple >>> shift operatior
// javascript numbers are 32 bit intersgers means thers are total 32 1 s ab  0s 
// console.log(9&5);

function binaryAdd(a,b){
    while(b!=0){
        var carry = a&b;
        a = a^b;
        b= carry<<1;
    }
    return a;
}

console.log(binaryAdd(5,6));