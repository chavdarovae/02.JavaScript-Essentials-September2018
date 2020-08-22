function chessboard(num) {

    let whiteSquare='<span class="white"></span>';
    let blackSquare='<span class="black"></span>';
    let oddSquare='';
    let evenSquare='';

    console.log(`<div class="chessboard">`);
    for(let i=1; i<=num; i++){
        if (i%2===0) {
            oddSquare=whiteSquare;
            evenSquare=blackSquare;
        } else {
            oddSquare=blackSquare;
            evenSquare=whiteSquare;
        }
        
        console.log(`<div>`);
        for(let j=1; j<=num; j++){
            if (j%2===0) {
                console.log(evenSquare);
            } else {
                console.log(oddSquare);
            }
        }
        
        console.log(`</div>`);
    }
    console.log(`</div>`);
}