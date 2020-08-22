function solve(input) {
    let guestList=[];

    for (const currCommand of input) {
        let token=currCommand.split(' ');
        let guestName=token[0];

        if (token.length===3) {
            addNameToList(guestName, guestList);
        } else {
            removeNameFromList(guestName, guestList);
        }
    }
    console.log(guestList.join('\n'));
    


    function addNameToList(name, list) {
        if (!list.includes(name)) {
            list.push(name)
        } else {
            console.log(`${name} is already in the list!`);
        }
    }

    function removeNameFromList(name, list) {
        if (list.includes(name)) {
            let index=list.indexOf(name);
            list.splice(index,1);
        } else {
            console.log(`${name} is not in the list!`);
        }
    }
    
}