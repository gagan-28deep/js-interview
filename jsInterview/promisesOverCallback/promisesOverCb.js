const lib = require('./lib');

let amount = 2000
let tocut = 200

function chargeCard(){
    amount = amount - tocut
    console.log(`Remaining Amount Is ${amount}`);
}

// lib.updateAccount('Tv' , chargeCard)

let promiseObj = lib.promiseUpdateAccount("Tv").then(chargeCard)

console.log(promiseObj);


// Callback have security issue if we use more than one time.
// Callback leads to callback hell