function printDNA (num) {
    let fiSym=0;         
    let seSym=0;   
    let pattern='**AT** *C--G* T----T *A--G*'.split(' ');
    let sequence='ATCGTTAGGG';
    let newSeq='';    
    let endPart=0;
    let repeatingPart=0;

    if (num<=sequence.length/2) {
        endPart=num;
        for (let i = 0; i < endPart*2; i++) {
            newSeq+= sequence[i];            
        }
    } else {
        endPart=num%(sequence.length/2);
        repeatingPart=Math.floor(num/(sequence.length/2));
        newSeq='ATCGTTAGGG'.repeat(repeatingPart);
        for (let i = 0; i < endPart*2; i++) {
            newSeq+= sequence[i];            
        }
    }       
    
    

    for (let i = 0; i < pattern.length; i++) {
        pattern[i]=pattern[i].split('');    
    } 
    
    function printDNALine(i,fiSym,seSym,pattern) {
        if (i===0) {
            pattern[i][2]=fiSym;
            pattern[i][3]=seSym;
            console.log(pattern[i].join(''));            
        } else if (i===1){
            pattern[i][1]=fiSym;
            pattern[i][4]=seSym;
            console.log(pattern[i].join('')); 
        } else if (i===2){
            pattern[i][0]=fiSym;
            pattern[i][5]=seSym;
            console.log(pattern[i].join(''));  
        } else if (i===3){
            pattern[i][1]=fiSym;
            pattern[i][4]=seSym;
            console.log(pattern[i].join(''));
        }
    }
    let counter=0;  
    for (let i = 0; i < newSeq.length; i+=2) {
        fiSym=newSeq[i];
        seSym=newSeq[i+1]; 
        if (counter<=pattern.length-1) {
            printDNALine(counter,fiSym,seSym,pattern);        
        } else {
            let j=counter%(pattern.length);
            printDNALine(j,fiSym,seSym,pattern);
        }   
        counter++    
    }
   
        
}