function printOddAndEvenSum (number) {
    let stringedNum=number.toString();
    let arrayOfDigits=stringedNum.split('').map(Number);
         
    function findOddSum(array) {
        let sum=0;
        for (let i = 0; i < array.length; i++) {
            if (array[i]%2===1) {
                sum+=array[i];
            }            
        }
        return sum;
    }

    function findEvenSum(array) {
        let sum=0;
        for (let i = 0; i < array.length; i++) {
            if (array[i]%2===0) {
                sum+=array[i];
            }            
        }
        return sum;
    }
   
    console.log(`Odd sum = ${findOddSum(arrayOfDigits)}, Even sum = ${findEvenSum(arrayOfDigits)}`);
    
}