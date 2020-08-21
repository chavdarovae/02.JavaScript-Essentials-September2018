function sumDigits(number) {
    let numberStringed=number.toString();
    let sumOfDigits=0;
    for(let i=0; i<numberStringed.length; i++){
        sumOfDigits+=+numberStringed[i];
    }
    
    console.log(sumOfDigits);
}