function solve(input) {
    let movieList=[];

    for (let line of input) {
        if (line.includes('add movie')) {
            let [useless,movieName]=line.split('add movie ');
            movieList.push({name: movieName, director: '0', date: '0'})
        }
        if (line.includes('directed by')) {
            let [movieName, directorName]=line.split(' directed by ');
            addDirector(directorName, movieName, movieList);
        }
        if (line.includes('on date')) {
            let [movieName, issueDate ]=line.split(' on date ');
            addDate(issueDate, movieName, movieList)
        }
    } 
    
    for (let movie of movieList){
        if (movie.director!=='0' & movie.date!=='0') {
            console.log(JSON.stringify(movie));            
        }
    }

    function addDirector(director, movie, array){
        let foundMovie=array.find(a=>a.name===movie);
        if (foundMovie) {
            foundMovie.director=director;
        }
    }

    function addDate(date, movie, array) {
        let foundMovie=array.find(a=>a.name===movie)
        if (foundMovie) {
            foundMovie.date=date;
        }
    }
    
}

solve(
    [
        'add movie Fast and Furious',
        'add movie Godfather',
        'Inception directed by Christopher Nolan',
        'Godfather directed by Francis Ford Coppola',
        'Godfather on date 29.07.2018',
        'Fast and Furious on date 30.07.2018',
        'Batman on date 01.08.2018',
        'Fast and Furious directed by Rob Cohen'
    ]
);
