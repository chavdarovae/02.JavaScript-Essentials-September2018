function solve(input) {
    let carList=new Map();

    for (let line of input) {
        let [stat,carNumb]=line.split(', ');
        carList.set(carNumb,stat)  
    }
    let filteredList=[...carList]
            .filter((x)=>x[1]==='IN')
            .sort((a,b)=> a[0].localeCompare(b[0]))
            .map(y=>y[0])
            .join('\n');
    
    if (filteredList.length>0) {
        console.log(filteredList);
    }else{
        console.log('Parking Lot is Empty');        
    } 
}