function lowerOrUpper(letter) {
    let numberOfLetter=letter.charCodeAt();
    
    if (numberOfLetter>=97) {
        console.log(`lower-case`);
    } else {
        console.log(`upper-case`);
    }
}
