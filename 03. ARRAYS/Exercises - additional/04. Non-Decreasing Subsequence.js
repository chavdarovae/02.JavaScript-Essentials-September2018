function nonDecreasingSeq(arr) {
    
    let newArr=[];
    let biggest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>=biggest){
            newArr.push(arr[i]);
            biggest=arr[i];
        }
    }
    console.log(newArr.join(' '));
}