function addRemove(arr) {
    let counter=0;
    let newArr=[];

    for(let i=0; i<arr.length; i++){
    counter++;
    if (arr[i]==='add') {
        newArr.push(counter);
    } else if (arr[i]==='remove'){
        newArr.reverse();
        newArr.shift();
        newArr.reverse();

    }
    }
    
     if (typeof(newArr[0]) === "undefined") {
         console.log('Empty');
         
     } else {
        console.log(newArr.join(' '));
     }

    
    
}