function division(num){
    let greatestDivider=-1;
    if (num%2===0) {
        greatestDivider=2
    }
    if (num%3===0) {
        greatestDivider=3
    }
    if (num%6===0) {
        greatestDivider=6
    }
    if (num%7===0) {
        greatestDivider=7
    }
    if (num%10===0) {
        greatestDivider=10
    }

    if (greatestDivider<0) {
        console.log(`Not divisible`);
    }else{
        console.log(`The number is divisible by ${greatestDivider}`);
    }
}