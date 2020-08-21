function calcFatorialDivision(firstNum, secondNum) {
    let firstFactorial=getFactorial(firstNum);
    let secondFactorial=getFactorial(secondNum);

    console.log((firstFactorial/secondFactorial).toFixed(2));

    function getFactorial(num) {
        let factorial=1;
        for (let i = 1; i <= num; i++) {
            factorial*=i;            
        }
        return factorial;
    }   
}