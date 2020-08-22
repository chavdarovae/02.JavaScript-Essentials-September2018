function areDistancesBtwPointsValid(arr) {
    let x1=arr[0];
    let y1=arr[1];
    let x2=arr[2];
    let y2=arr[3];

    if (isDistanceValid(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);        
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`); 
    }

    if (isDistanceValid(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);        
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`); 
    }

    if (isDistanceValid(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);        
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`); 
    }

      function isDistanceValid(x1, y1, x2, y2) {
        let dist=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
        return dist%1===0 ? true : false;
      }
}