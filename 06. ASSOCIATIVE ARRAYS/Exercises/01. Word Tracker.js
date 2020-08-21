function solve(text){
    let trackWords=text
            .shift()
            .split(' ')
    let wordTrackList={};
    for(let word of trackWords){
        wordTrackList[word]=0;
        for(let part of text){
            if(word===part){
                wordTrackList[word]++;  
            }
        }
    }

    let list=Object.entries(wordTrackList)
            .sort((a,b)=>b[1]-a[1])
            .forEach(kvp=> console.log(kvp[0]+' - '+kvp[1]))
    
}