function solve(arr) {
    let train=arr
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity=+arr.shift();
    for (const currEl of arr) {
        let token=currEl.split(' ');

        if (token.length>1) {
            train.push(+token[1])
        } else {
            for (let i = 0; i < train.length; i++) {
                if (+token[0]+train[i]<=maxCapacity) {
                    train[i]+=+token[0];
                    break;
                }
                
            }
        }
    }
    console.log(train.join(' '));
}