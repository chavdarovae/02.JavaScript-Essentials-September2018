function solve(seq,bomb) {
    let triger=bomb[0];
    let power=bomb[1];

    for (let i = 0; i < seq.length; i++) {
        let start=Math.max(0,i-power);
        let length=2*power+1;
        if (seq[i]===triger) {
            seq.splice(start,length);
            i=start-1;
        }
    }
    
    let sum=0;
    for (const num of seq) {
        sum+=num;
    }
    console.log(sum);
}