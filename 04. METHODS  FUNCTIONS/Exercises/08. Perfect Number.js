function numberIsPerfectOrNot (num) {
    let sum=getSumOfDividers(num);
    console.log(sum===num ? 'We have a perfect number!' : 'It’s not so perfect.');
    
    function getSumOfDividers(number){
        let sumOfDividers=0;
 
        for (let i = 1; i <= number/2; i++) {
            if (number%i===0) {
             sumOfDividers+=i; 
            }
            
        }
        return sumOfDividers;
    }
            
 }