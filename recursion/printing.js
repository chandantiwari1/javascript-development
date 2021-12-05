function fiboNacci(n){
    var sum=0,first=0,last=1;
    for(var i=2;i<=n;i++){
        sum = last+first;
        first=last;
        last=sum;
        
    }
    return sum;
}

console.log(fiboNacci(5));