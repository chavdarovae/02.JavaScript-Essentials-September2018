function maxNumber(arr) {
    let newArr=[];
    let n=arr.length;
    let maxNum=arr[n-1];

    for (let i = n-2; i >= 0; i--) {
       if (+arr[i]>maxNum) {
           maxNum=+arr[i];
           newArr.push(maxNum);
       }
        
    }

    newArr.reverse();
    newArr.push(arr[n-1]);
    console.log(newArr.join(' '));
    
}