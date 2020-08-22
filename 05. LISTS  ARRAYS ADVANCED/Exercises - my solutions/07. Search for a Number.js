function solve(seq,manipulations) {
    let [brutSeq, netSeq, num]=manipulations;
    let times=0;
    
    let newSeq=seq.splice(0,brutSeq);
    let finalSeq=newSeq.splice(0,netSeq);
    
    for (const el of newSeq) {
        if (el===num) {
            times++;
        }
    }
    console.log(`Number ${num} occurs ${times} time.`);     
}