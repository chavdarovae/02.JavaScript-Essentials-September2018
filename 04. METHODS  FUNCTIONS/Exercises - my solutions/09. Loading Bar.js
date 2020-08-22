function visualizeLoadingBar(progress) {
    let prog=+progress/10;
     

    if (progress<100) {
        lessThanHundreadPercent(progress, prog);
    } else if (progress===100) {
        equalHundreadPercent();
    }

    function lessThanHundreadPercent(progress, prog) {
        console.log(`${progress}% [${'%'.repeat(prog)}${'.'.repeat(10-prog)}]`);
        console.log('Still loading...');        
    }

    function equalHundreadPercent() {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');        
    }
}