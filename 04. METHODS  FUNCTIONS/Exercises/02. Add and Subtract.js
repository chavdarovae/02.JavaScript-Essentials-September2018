function solve(firstNum, secondNum, thirdNum) {
    let add=(firstNum, secondNum) => firstNum+secondNum;
    let sumResult=add(firstNum, secondNum);
    let substract=(sumResult,thirdNum) => sumResult-thirdNum;

    return substract(sumResult, thirdNum);
}