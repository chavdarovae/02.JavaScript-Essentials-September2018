function mergeArrays(fiArr,secArr) {
    let thirdArr=[];

    for (let i = 0; i < fiArr.length; i++) {
        if (i%2===0) {
            thirdArr[i]=+fiArr[i]+(+secArr[i]);
            
        } else {
            thirdArr[i]=fiArr[i].toString()+secArr[i].toString();
        }
        
    }
    console.log(thirdArr.join(" - "));
    
}