function solve(input) {
    let seq=input
        .toLowerCase()
        .split(' ');
    let countList=new Map();

    for (let el of seq) {
        if (!countList.has(el)) {
            countList.set(el,0);
        }
        let oldCount=countList.get(el);
        countList.set(el,oldCount+1)        
    }

    let oddKeys=[...countList.entries()]
            .filter((kvp) => kvp[1]%2===1)
            .map((kvp)=>kvp[0])
            .join(' ');
    console.log(oddKeys);
   
}