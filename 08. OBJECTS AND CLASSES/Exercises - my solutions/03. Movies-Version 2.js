function solve(input) {
    
    let mDataBase=[];
        
    for (let line of input) {
        if(line.includes('add movie')){
            line=line.split(' movie ');
            let movieTitle=line[1];

            if(mDataBase.find(m=>m.name===movieTitle)===undefined){
                let movie={name: movieTitle, director: '', date: ''}
                mDataBase.push(movie)
            }
        }

        if(line.includes('directed by')){
            line=line.split(' directed by ');
            let movieTitle=line[0];
            let movieDirector=line[1];

            if(mDataBase.find(m=>m.name===movieTitle)!==undefined){
                addDirectorToDB(movieTitle,movieDirector,mDataBase);
            }            
        }

        if(line.includes('on date')){
            line=line.split(' on date ');
            let movieTitle=line[0];
            let movieDate=line[1];

            if(mDataBase.find(m=>m.name===movieTitle)!==undefined){
                addDateToDB(movieTitle,movieDate,mDataBase);
            }            
        }
    }
    
    mDataBase
        .filter(m=> m.director!=='')    
        .filter(m=> m.date!=='')         
        .forEach(m=> console.log(JSON.stringify(m)));

 

    function addDirectorToDB(mTitle,mDirector,mdb) {
        let foundMovie=mdb.find(m=> m.name===mTitle)
        if(foundMovie!==undefined){
            foundMovie.director=mDirector;
        }               
    }

    function addDateToDB(mTitle,mDate,mdb) {
        let foundMovie=mdb.find(m=> m.name===mTitle)
        if(foundMovie!==undefined){
            foundMovie.date=mDate;
        }                
    }    
}

solve([
'add movie Fast and Furious',
'add movie Godfather',
'Inception directed by Christopher Nolan',
'Godfather directed by Francis Ford Coppola',
'Godfather on date 29.07.2018',
'Fast and Furious on date 30.07.2018',
'Batman on date 01.08.2018',
'Fast and Furious directed by Rob Cohen'
])