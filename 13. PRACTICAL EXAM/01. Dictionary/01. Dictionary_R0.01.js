function solve(input) {
    let [dictionary,words,command]=input
    dictionary=dictionary.split(' | ')
    words=words.split(' | ')
    command=command.trim()
    
      
    let dict=new Map();
    for(let line of dictionary){
        let definition=line.split(': ')
        let dWord=definition.shift()
            
        if(words.includes(dWord)){       
            if (dict.has(dWord)) {
                let oldDef=dict.get(dWord)
                definition=definition.concat(oldDef)
            }   
                dict.set(dWord,definition)  
        }                    
    }
    
   
    
    let sorted=[...dict.entries()].sort((a,b) => a[0].localeCompare(b[0]))  
    let newDictionary=new Map();
    for(let [w,desc] of sorted){
        let sortedDesc=desc
                .sort((a,b) => b.length-a.length)
                .join('\n -')        
        newDictionary.set(w,sortedDesc); 
    }
 
    let sortedDict=[...newDictionary.entries()] 
    if(command==='List'){
        sortedDict=sortedDict
            .map(kvp=>kvp[0])
            .sort()
            .join(' ')
        console.log(sortedDict);
            
    }else if(command==='End'){
        sortedDict=sortedDict   
            .forEach(kvp => console.log(kvp[0]+'\n -'+kvp[1]))
    } 
}

solve([ 
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End' 
    ])