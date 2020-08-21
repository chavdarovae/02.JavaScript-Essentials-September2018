function spiceMustFlow(startingYield) {
    let dayCount=0;
    let spiceCount=0;

    while (startingYield>=100) {
        dayCount++;
        spiceCount+=startingYield-26;
        startingYield-=10;
        
    } 
    
    spiceCount-=26;
    if(spiceCount<0){
        spiceCount=0;
    }
    console.log(dayCount);
    console.log(spiceCount);
    
}