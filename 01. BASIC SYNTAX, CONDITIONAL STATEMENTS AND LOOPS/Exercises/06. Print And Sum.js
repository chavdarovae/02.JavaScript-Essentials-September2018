function printAndSum(start,end) {
    let sum=0;
    let printNumbers="";
    
    while (start<=end) {
        sum+=start;
        printNumbers+=start+" ";
        start++;         
    }
    
    
    console.log(printNumbers);
    console.log(`Sum: ${sum}`);
}