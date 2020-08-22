function solve(input) {
    let inventory=input.shift().split(' ');

    for (const currComm of input) {
        let token=currComm.split(' ');
        switch (token[0]) {
            case 'Buy': buy(token[1], inventory); break;             
            case 'Trash': trash(token[1], inventory); break;             
            case 'Repair': repair(token[1], inventory); break;             
            case 'Upgrade': 
            let upgradeEquip=token[1].split('-');
            upgrade(upgradeEquip[0],upgradeEquip[1], inventory); break;             
        }
    }
    console.log(inventory.join(' '));
    
    function buy(item, list) {
        if (!list.includes(item)) {
            list.push(item);
        }
    }

    function trash(item, list) {
        if (list.includes(item)) {
            let index=list.indexOf(item);
            list.splice(index,1);
        }
    }

    function repair(item, list) {
        if (list.includes(item)) {
            let index=list.indexOf(item);
            list.splice(index,1);
            list.push(item);
        }
    }

    function upgrade(item,upgrade, list) {
        if (list.includes(item)) {
            let index=list.indexOf(item);
            let upgradedInv=item +':'+ upgrade;
            list.splice(index+1,0,upgradedInv);            
        }
    }
    
}