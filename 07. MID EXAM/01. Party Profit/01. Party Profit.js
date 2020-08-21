function solve(arr) {
    let [comps, days]=arr.map(Number);
    let dailyBalance=0;
    let profit=0;

    for (let i = 1; i <= days; i++) {
               
        if (i%10===0) {comps-=2;}   
        if (i%15===0) {comps+=5;}

        let dailyIncome=50;     
        let dailyExpence=comps*2;

        if (i%3===0) {dailyExpence+=comps*3;}   
        if (i%5===0) {dailyIncome+=comps*20;} 
        if (i%3===0 & i%5===0) {dailyExpence+=comps*2;}  
        
        dailyBalance=dailyIncome-dailyExpence;
        profit+=dailyBalance;
               
    }    
    console.log(`${comps} companions received ${Math.floor(profit/comps)} coins each.`);  
}

solve(['15','30']);
