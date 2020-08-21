function longestSequence(arr) {
    arr=arr[0].split(' ');
    
    let seqArr=[];
    let countArr=[];

    for(let i=0; i<arr.length; i++){
        let currEl=arr[i];
        let currCount=1;
        while (arr[i]===arr[i+1]) {
            currEl+=' '+arr[i];
            currCount++;
            i++;
        }
        seqArr.push(currEl);
        countArr.push(currCount);
    }

    let index=0;
    let maxSeq=countArr[0];
    for(let i=1; i<countArr.length; i++){
        if (maxSeq<countArr[i]) {
            maxSeq=countArr[i];
            index=i;
        }
    }

    console.log(seqArr[index]);

}