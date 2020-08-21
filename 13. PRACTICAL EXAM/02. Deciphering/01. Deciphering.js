function solve(input) {
    let [bookTitel, subStr]=input;
    bookTitel=bookTitel.split('')
    let [fiSub,secSub]=subStr.split(' ')
    let newTitel=[];

    
    for(let symbol of bookTitel){
        let asciiCode=symbol.charCodeAt()
        asciiCode-=3
        if(asciiCode<97 || asciiCode>122 || 
            asciiCode!==35 || asciiCode!==123 || asciiCode!==125 || asciiCode!==124 ){
                return   console.log('This is not the book you are looking for.');
            }
        let newSymb=String.fromCharCode(asciiCode)
        newTitel.push(newSymb)   
    }
    let Titel=newTitel.join('')
    
    
    while(Titel.includes(fiSub)){
        Titel=Titel.replace(fiSub,secSub)
    }
    Titel=Titel.split('')
    
    for(let char of Titel){
        asciiCode=char.charCodeAt()
        if(asciiCode<97 || asciiCode>122 || 
            asciiCode!==35 || asciiCode!==123 || asciiCode!==125 || asciiCode!==124 ){
                return   console.log('This is not the book you are looking for.');
            }
    }

        console.log(Titel);
  
    
    

}

solve([ 
    'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an'

 
    ])