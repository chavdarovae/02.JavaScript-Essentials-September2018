function arrayRotation(arr,num) {
    let curEl=0;
    for (let i = 0; i < num; i++) {
        curEl=arr[0];
        arr.shift();
        arr.push(curEl);
    }
    console.log(arr.join(' '));
    
}