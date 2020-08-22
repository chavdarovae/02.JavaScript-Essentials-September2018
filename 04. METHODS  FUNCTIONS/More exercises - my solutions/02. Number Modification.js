function printModifiedNumber(num) {
    let stringedNumber=num.toString().split('').map(Number);
    while (!isAverageHigherThanFive(stringedNumber)) {
        stringedNumber.push(9);
    }
   
    console.log(stringedNumber.join(''));   

    function isAverageHigherThanFive(array) {
        let sum=0;
        for (let i = 0; i < array.length; i++) {
          sum+=array[i];           
        }
        return sum/array.length>5 ? true : false ;
    }       
}