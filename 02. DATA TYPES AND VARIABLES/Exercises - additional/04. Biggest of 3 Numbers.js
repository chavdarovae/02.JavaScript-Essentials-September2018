function biggestOfThree(num1,num2,num3) {
    let biggestNum=num1;
       
    if (biggestNum<num2){
        biggestNum=num2;
    } 
    if (biggestNum<num3){
        biggestNum=num3;
    }
    console.log(biggestNum);
}