function login(arr) {
    let username=arr[0];
    let n = username.length;
    let realpass="";
    for(let i=0; i<n; i++){
        realpass+= username[n-i-1];
    }

    let falsePassCounter=0;

    for(let i=1; i<arr.length; i++){
       if (arr[i]===realpass) {
            console.log(`User ${username} logged in.`);
       }else{
            falsePassCounter++;
            if (falsePassCounter>3) {
                console.log(`User ${username} blocked!`);
            } else {
                console.log(`Incorrect password. Try again.`); 
            }             
           
       }
    }
}