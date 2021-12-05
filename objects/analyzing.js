function someLargeArray(){
    return new Array(1000000);
}


var exampleObject = {
    'prop1':someLargeArray(),
    'prop2':someLargeArray()
}

function printProperty(obj){
    console.log(obj);
}

console.log(printProperty(exampleObject.prop1));
