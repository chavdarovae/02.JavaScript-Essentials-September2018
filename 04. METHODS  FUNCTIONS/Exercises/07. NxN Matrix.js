function printTheShortestAndTheLongestWord(sentence) {
    let words=sentence.split(/[\.\,\s\!\?]+/g);

    if (words[words.length-1]==='') {
        words.pop();
    }

    function getLongestWord(array) {
        let referenceWord=array[0].length;
        let referenceWordIndex=0;

        for (let i = 1; i < array.length; i++) {
            if (referenceWord<array[i].length) {
                referenceWord=array[i].length;
                referenceWordIndex=i;
            }            
        }
        return array[referenceWordIndex];
    }

    function getShortestWord(array) {
        let referenceWord=array[0].length;
        let referenceWordIndex=0;

        for (let i = 1; i < array.length; i++) {
            if (referenceWord>array[i].length) {
                referenceWord=array[i].length;
                referenceWordIndex=i;
            }            
        }
        return array[referenceWordIndex];
    }
    console.log(`Longest -> ${getLongestWord(words)}`);
    console.log(`Shortest -> ${getShortestWord(words)}`);
           
}