function solve(input) {
    let cardPower=new Map([
                            ['2',2],
                            ['3',3],
                            ['4',4],
                            ['5',5],
                            ['6',6],
                            ['7',7],
                            ['8',8],
                            ['9',9],
                            ['10',10],
                            ['J',11],
                            ['Q',12],
                            ['K',13],
                            ['A',14],
                                    ]);
    let cardType=new Map([
                            ['S',4],
                            ['H',3],
                            ['D',2],
                            ['C',1],
                                    ]);

    let pList=new Map();
    for (let line of input) {
        let [player,cards]=line.split(': ');
        
        if (!pList.has(player)) {
            pList.set(player, cards);
        }else{
            let oldCards=pList.get(player);
            pList.set(player, oldCards+', '+ cards)
        }     

    }
 
    let list=[...pList];
       
     

    for (let i = 0; i < list.length; i++) {
        let name=list[i][0];
        let cDeals=list[i][1].split(', ');
                         
        let cardDeals=new Map();
        for (let deal of cDeals) {
            cardDeals.set(deal,name)
        }
        let deals=[...cardDeals].map(x=>x[0]);
       
        let score=0;
        for (let deal of deals){
            let power=0;
            let type=0;
            if (deal.length===2) {
                power=+cardPower.get(deal[0]);
                type=+cardType.get(deal[1]);
            } else {
                power=+cardPower.get(deal[0]+deal[1]);
                type=+cardType.get(deal[2]);
            } 
            score+=power*type;
        }
        console.log(`${name}: ${score}`);
                
    }
    
    
               
                      

}
