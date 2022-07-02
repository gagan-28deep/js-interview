//  Question 1

// (function immediateA(a){
//     return (function immediateB(b){
//         console.log(a);  // a getting value from B parent a and value of a is passed as 0
//     })(1)
// })(0)

// Output : 0


// Question 2
// let count = 0 
// (function immediate(){
//     if(count===0){
//         let count = 1
//         console.log(count);
//     }
//     console.log(count);
// })()

// Output : 1 and 0



// Question 3
function createIncrement(){
    let count = 0
    function increment(){
        count++
    }
    let message = `Count is ${count}`
    function log(){
        console.log(message);
    }

    return [increment , log]
}

const [increment , log] = createIncrement()
increment()
increment()
increment()
log()

// Output : Count is 0