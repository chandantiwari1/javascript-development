var RED =0, GREEN=1,BLUE=2;

function redGreenBlueCount(arr){
    var counter = new Array(3).fill(0);
    for(var i=0; i<arr.length;i++){
        var curr = arr[i];
        if(curr == RED){
            counter[RED]++;
        }else if(curr == GREEN){
            counter[GREEN]++
        }else if(curr==BLUE){
            counter[BLUE]++;
        }
    }
    return counter;
}

console.log(redGreenBlueCount([0,1,1,1,2,2,2]));