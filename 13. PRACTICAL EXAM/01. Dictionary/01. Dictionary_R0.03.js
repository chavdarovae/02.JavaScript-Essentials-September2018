function solve(defList,wordList,command) {
    defList=defList.split(' | ');
    wordList=wordList.split(' | ');
    
    let dictionary=new Map();
    let fullWordList=new Set();
    for (const def of defList) {
        let [word, wordDef]=def.split(': ');
        fullWordList.add(word);

        if(wordList.includes(word)){
            let definition=[] 
            if(dictionary.has(word)){
                definition=dictionary.get(word);  
            }            
            definition.push(wordDef)
            dictionary.set(word, definition)       
        }
    }
    
    
    for(let [key,matrix] of dictionary.entries()){
        let stringedMatrix=matrix.sort((a,b)=>b.length-a.length).join('\n -')
        dictionary.set(key,stringedMatrix);  
    }

    dictionary=[...dictionary].sort((a,b)=>a[0].localeCompare(b[0]))

    if(command==='List'){
        fullWordList=[...fullWordList].sort((a,b)=>a.localeCompare(b)).join(' ')
        console.log(fullWordList);
    }else if(command==='End'){
        dictionary.forEach(x=>{console.log(x[0]+'\n -'+x[1])})
    }
}

solve(
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | tackle',
    'End'    
    )