function solve(dictInput,searchedWords,command) {
    dictInput=dictInput.split(' | ');
    searchedWords=searchedWords.split(' | ');
    let dictionary=[];
    let wordList=new Set();

    for(let line of dictInput){
        let [newWord, newDefinition]=line.split(': ');
        wordList.add(newWord);

            if(dictionary.find(obj=>obj.word===newWord)===undefined){
                let dWord={word: newWord, definition: [newDefinition]};
                dictionary.push(dWord)
            }else{
                let foundWord=dictionary.find(obj=>obj.word===newWord);
                foundWord.definition.push(newDefinition);
            }
           
    }
    for (let obj of dictionary) {
        obj.definition=obj.definition
            .sort((a,b)=> b.length-a.length)
            .join('\n -')
    }

        if(command==='List'){
            wordlist= [...wordList]
                    .sort((a,b)=>a.localeCompare(b))
                    .join(' ')

        console.log(wordlist);
        }else if(command==='End'){
            dictionary
            .map(w=>Object.values(w))
            .sort((a,b)=> a[0].localeCompare(b[0]))
            .forEach(el=>console.log(el[0]+'\n -'+ el[1]));
        }      
}

solve(
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | tackle',
    'End'    
    )