function equalSums(arr) {
    let n=arr.length;
    let leftSum=0;
    let rightSum=0;
    let indexPosition='no';

    for (let i = 0; i < n; i++) {
        leftSum=0;
        rightSum=0;

        for (let j = 0; j < i; j++) {
            leftSum+=+arr[j];            
        }
        for (let j = n-1; j > i; j--) {
            rightSum+=+arr[j];            
        }
        
        if (leftSum===rightSum) {
            indexPosition=i;
            break;
        }
    }
   
    console.log(indexPosition);
    
}