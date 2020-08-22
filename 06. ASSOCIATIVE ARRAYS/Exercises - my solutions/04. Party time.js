function solve(input) {
    let index=input.indexOf('PARTY');
    let guestList=new Map;

    for (let i = 0; i < index; i++) {
        let guest=input[i];
        if (!guestList.has(guest)) {
            guestList.set(guest,'not here')
        }        
    }

    for (let i = index+1; i < input.length; i++) {
        let guest=input[i];
        if (guestList.has(guest)) {
            guestList.set(guest,'here')
        }        
    }

    let filteredList=[...guestList]
                .filter((kvp)=>kvp[1]==='not here')
                .map((kvp)=>kvp[0])
                .sort((a,b)=>a.localeCompare(b));
    
    let regularList=filteredList
            .filter(a => isNaN(a[0])===true)
            .sort((a,b)=>b.localeCompare(a));
    let vipList=filteredList.filter(a => isNaN(a[0])===false);

    console.log(vipList.length+regularList.length);
    console.log(vipList.join('\n'));
    console.log(regularList.join('\n'));
}

solve([
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'mdSGyQCJ',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'9CQBGUeJ'
])
