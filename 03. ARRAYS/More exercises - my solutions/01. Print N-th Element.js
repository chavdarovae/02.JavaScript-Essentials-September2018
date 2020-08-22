function nElement(arr) {
    let n=arr.length;
    let step=+arr[n-1]; 
    let newArr=[];

    for(let i=0; i<n-1; i+=step){
    newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
    

}