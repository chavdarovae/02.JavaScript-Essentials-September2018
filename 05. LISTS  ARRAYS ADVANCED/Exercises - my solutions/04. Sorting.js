function solve(arr) {
    let newArr=[];
    arr.sort((a,b)=>a-b);
    let length=arr.length;
    
    for (let i = 0; i < length; i++) {
    
        if (i%2===0) {
            newArr.push(arr.pop());
        } else {
            newArr.push(arr.shift());
        }
    }
    console.log(newArr.join(' '));
    
}