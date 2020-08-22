function solve(array) {
    let endOfCommands=array.indexOf('wife is happy')
    let commands=array.slice(0,endOfCommands);
    
   

    let rDishes=/[a-z0-9]+(?=>)/g;
    let rCleaning=/[A-Z0-9]+(?=])/g;
    let rLaundry=/[A-Za-z0-9!@#$%^&*()_+}[|/><,.~`]+(?=})/g
    let rNumbers=/[0-9]/g

    let dishes=[];
    let cleaning=[];
    let laundry=[];
    for(let command of commands){
        if(command.match(rDishes)!==null){
            let str=command.match(rDishes);
            str=str.join('');
            dishes.push(str);
        }else if(command.match(rCleaning)!==null){
            let str=command.match(rCleaning);
            str=str.join('');
            cleaning.push(str);
        }else if(command.match(rLaundry)!==null){
            let str=command.match(rLaundry);
            str=str.join('');
            laundry.push(str);
        }
    }

    function findTheNecessaryTime(arr){
        let time=0;
        for(let el of arr){
            let minutes=el.match(rNumbers);
            minutes=minutes.map(Number).reduce((a,b)=>a+b)
            time+=minutes;
        }
        return time;         
    }

    let timeDishes=findTheNecessaryTime(dishes)
    let timeCleaning=findTheNecessaryTime(cleaning)
    let timeLaundry=findTheNecessaryTime(laundry)
    let totalMinutes=timeDishes+timeCleaning+timeLaundry;  
    
    
  
    console.log(
`Doing the dishes - ${timeDishes} min.
Cleaning the house - ${timeCleaning} min.
Doing the laundry - ${timeLaundry} min.
Total - ${totalMinutes} min.`);  
}

solve([ 
    '-^hr5a65j48<dd6f5h4dhfd>456sga_+',
    'DHdhy4*3[T2HOU87KRC]sA/@',
    'Sda%t]gf{%hjK8f34)!fG1re}-+htG%v',
    'wife is happy',
    '' 
])