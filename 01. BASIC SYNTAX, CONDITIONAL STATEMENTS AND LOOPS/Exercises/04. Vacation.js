function vacation(members,groupeType,weekDay) {
    let pricePerPerson=0;
    let totalPrice=0;

    switch (groupeType) {
        case 'Students':
            switch (weekDay) {
                case 'Friday':
                    pricePerPerson=8.45;
                    break;
                case 'Saturday':
                    pricePerPerson=9.80;
                    break;
                case 'Sunday':
                    pricePerPerson=10.46;
                    break;                
            }
            break;

        case 'Business':
            switch (weekDay) {
                case 'Friday':
                    pricePerPerson=10.90;
                    break;
                case 'Saturday':
                    pricePerPerson=15.60;
                    break;
                case 'Sunday':
                    pricePerPerson=16;
                    break;                
            }
            break;

        case 'Regular':
            switch (weekDay) {
                case 'Friday':
                    pricePerPerson=15;
                    break;
                case 'Saturday':
                    pricePerPerson=20;
                    break;
                case 'Sunday':
                    pricePerPerson=22.50;
                    break;                
            }
            break;
    
    }

    

    if (groupeType==='Students' && members>=30) {
       totalPrice=0.85*members*pricePerPerson;
    }else if (groupeType==='Business' && members>=100){
        totalPrice=(members-10)*pricePerPerson;
    }
    else if (groupeType==='Regular' && members>=10 && members<=20){
        totalPrice=0.95*members*pricePerPerson;
    }else{
        totalPrice=members*pricePerPerson;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}