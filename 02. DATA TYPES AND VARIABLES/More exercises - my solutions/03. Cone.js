function cone(radius,height) {
    let volume=Math.PI*height*radius*radius/3;
    let area=Math.PI*radius*radius+Math.PI*radius*Math.sqrt(radius**2+height**2);
   console.log(`volume = ${volume.toFixed(4)}`); 
   console.log(`area = ${area.toFixed(4)}`); 
}
