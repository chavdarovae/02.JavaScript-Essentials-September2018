function triangeArea(sideA,sideB,sideC) {
    let s=(sideA+sideB+sideC)/2;
    let area=Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));
    console.log(area);
}