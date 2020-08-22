function printHowCleanTheCarIs(arr) {
    let carCleanness=10;
 
    for (let i = 1; i < arr.length; i++) {
         carCleanness=calcCleaningProceduresInPercent(arr[i],carCleanness);       
    }
 
    function calcCleaningProceduresInPercent(procedure,carCleanness) {
        
        switch (procedure) {
            case  'soap': carCleanness+=10; break;       
            case  'water': carCleanness*=1.20; break;       
            case  'vacuum cleaner': carCleanness*=1.25; break;       
            case  'mud': carCleanness*=0.9; break;           
        }
        return carCleanness;
    }
 
    console.log(`The car is ${carCleanness.toFixed(2)}% clean.`);
    
 }