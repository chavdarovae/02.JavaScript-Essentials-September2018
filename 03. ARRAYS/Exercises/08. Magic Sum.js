function magicSum(arr) {
    let pairArr=arr[0].split(' ');
    let number=+arr[1];

    for(let i=0; i<pairArr.length; i++){
        let firstMember=pairArr[i];
        for(let j=i+1; j<pairArr.length; j++){
            if (+pairArr[i]+(+pairArr[j])===number) {
                console.log(pairArr[i]+' '+pairArr[j]);
                
            }
        
        }
    
    }

}