function rotateArr(arr) {
    let n=arr.length;
    let rotation=+arr[n-1]; 
    let newArr=[];
    arr.reverse();
    arr.shift();
    arr.reverse();
    let currEl='';

    for(let i=0; i<rotation; i++){
        let currEl=arr[n-2];
        arr.reverse();
        arr.shift();
        arr.push(currEl);
        arr.reverse();
    }

    console.log(arr.join(' '));  

}