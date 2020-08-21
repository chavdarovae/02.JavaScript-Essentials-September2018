function solve(arr) {       
    let oldSum=0;
    let newSum=0;
    let newArr=[];

   for (let i=0;i<arr.length;i++) {
       oldSum+=+arr[i];
       if (+arr[i]%2===0) {
           newArr[i]=+arr[i]+i;
       } else {
           newArr[i]=+arr[i]-i;           
       }
       newSum+=newArr[i];
   }
   
console.log(`[ ${newArr.join(', ')} ]`);
console.log(oldSum);
console.log(newSum);


}