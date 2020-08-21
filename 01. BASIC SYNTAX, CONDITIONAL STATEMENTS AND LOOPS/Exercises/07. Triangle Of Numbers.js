function triangleOfNumbers(num) {
    let printLine="";

    for(let i=1; i<=num; i++){
        printLine=""
        for(let j=1; j<=i; j++){
            printLine+=i+" ";
        }
        console.log(printLine);
    }
}