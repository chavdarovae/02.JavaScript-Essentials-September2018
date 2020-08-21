function solve(input) {
    let heroes=[];

    for(let line of input){
        let [name, lev, items]=line.split(' / ');
        let level=Number(lev);      
        items=items.split(', ');

        heroes.push(
            JSON.stringify({
            name,
            level,
            items
            })            
        );       
    }
    console.log(`[${heroes.join(',')}]`);  
}

solve(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]

);
