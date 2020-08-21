function solve(input,param) {
    let twoNamesReg=/(?<= )[A-Z][a-z]+[-][A-Za-z]+(?= )/g;
    let threeNamesReg=/(?<= )[A-Za-z]+[-][A-Za-z]+[.][-][A-Za-z]+(?= )/g;
    let airportReg=/(?<= )[A-Z][A-Z][A-Z][\/][A-Z][A-Z][A-Z](?= )/g;
    let flightNumReg=/(?<= )[A-Z]*[A-Z]*[A-Z][0-9][0-9]*[0-9]*[0-9]*[0-9]*(?= )/g;
    let companyReg=/(?<= )[-][ ][A-Z][a-z]+[*][A-Z][a-z]+(?= )/g;

    let passengerName=derivePassengerName(input,twoNamesReg, threeNamesReg);
    let airport=deriveAirports(input,airportReg);
    airport=airport.split('/')
    let fromAirport=airport[0];
    let toAirport=airport[1];
    let flightNum= deriveFlightNum(input,flightNumReg);
    let company=deriveCompany(input,companyReg);
    let print='';

    switch (param) {
        case 'name': console.log(`Mr/Ms, ${passengerName}, have a nice flight!`);
            break;
        case 'flight': console.log(`Your flight number ${flightNum} is from ${fromAirport} to ${toAirport}.`);
             break;
        case 'company': console.log(`Have a nice flight with ${company}.`);
             break;
        case 'all': console.log(`Mr/Ms, ${passengerName}, your flight number ${flightNum} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
            break;
    }
 

    function derivePassengerName(string,rTwoNames, rThreeNames) {
        let foundName='';
        if(string.match(rTwoNames)!==null){
            foundName=string.match(rTwoNames);
        }else if(string.match(rThreeNames)!==null){
            foundName=string.match(rThreeNames);
        }
        foundName=foundName.join().replace('.','');
        while(foundName.includes('-')){
            foundName=foundName.replace('-',' ');
        }
        return foundName;
    }

    function deriveFlightNum(string,rFligthNum){
        let foundFlightNum=string.match(rFligthNum);
        foundFlightNum=foundFlightNum.join('').trim();
        return foundFlightNum;
    }

    function deriveCompany(string,rCompany) {
        let foundCompany=string.match(rCompany);
        foundCompany=foundCompany.join('').trim();
        foundCompany=foundCompany.replace('*',' ').replace('-','').trim();
        return foundCompany; 
    }

    function deriveAirports(string,rAirport) {
        let foundAirports=string.match(rAirport);
        foundAirports=foundAirports.join('').trim();
        return foundAirports; 
    }
}

solve(
    'ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 
    'all'
)