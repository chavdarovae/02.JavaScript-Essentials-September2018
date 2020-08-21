function solve(arr){
    let caffeinePrice=0.80;
    let decafPrice=0.90;
    let teaPrice=0.80;
    let sugarPrice=0.10;
    let totalMoney=0;
    
    
    for(let line of arr){
        let order=line.split(', ');
        let money=Number(order.shift());
        let sugar=Number(order.pop());
        let drink=order[0];

        let currentDrinkPrice=pricingDrink(order,sugar);
        

        let change=Math.abs(money-currentDrinkPrice);
        if(currentDrinkPrice<=money){
            totalMoney+=currentDrinkPrice;
            console.log(`You ordered ${drink}. Price: ${currentDrinkPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        }else{
            console.log(`Not enough money for ${drink}. Need ${change.toFixed(2)}$ more.`);
        }

    }
     
    function pricingDrink(order,sugar){
        let drinkPrice=0;
        if(order[0]==='coffee'){
            if(order[1]==='caffeine'){
                drinkPrice+=caffeinePrice;
            }else if(order[1]==='decaf'){
                drinkPrice+=decafPrice;                
            }
        }else if(order[0]==='tea'){
            drinkPrice+=teaPrice;
        }

        if(order.includes('milk')){
            drinkPrice+=Number((drinkPrice*0.1).toFixed(1));
        }

        if(sugar!==0){
            drinkPrice+=sugarPrice;
        }
        return drinkPrice;       
    }   

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}

solve([
    '1.00, coffee, caffeine, milk, 4',
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'    
]);