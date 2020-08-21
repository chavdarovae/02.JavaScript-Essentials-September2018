 
function solve(arr) {
    
    console.log(arr.sort(sortAccCriteria).join('\n'));

    function sortAccCriteria(a,b) {
        let aLength=a.length;
        let bLength=b.length;
        let result=aLength-bLength;
        if (result===0) {
            return a.localeCompare(b);
        }
        return result;
    }
}