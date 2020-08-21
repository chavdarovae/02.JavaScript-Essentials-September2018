function solve(arr) {
    let newArr=[];
 
    for (const currEl of arr) {
        if (!newArr.includes(currEl)) {
            newArr.push(currEl);
        }
    }
    console.log(newArr.join(' '));
 }