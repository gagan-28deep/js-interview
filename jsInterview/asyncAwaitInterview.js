// Question 1
// Find output

// async function inc(x){
//     x= x + await 1
//     return x
// }
// async function increment(x){
//     x= x + 1
//     return x
// }

// inc(1).then(function(x){
//     increment(x).then(function(x){
//         console.log(x);
//     })
// })


// Question 2

// async function f1(){
//     console.log(1);
// }
// async function f1(){
//     console.log(2);
// }

// console.log(3);
// f1()
// console.log(1);
// f2()

// async function f2(){
//     console.log("GO!!");
// }

// Output :  3  2  1  GO!!



// Question 3

function resolvedAfterSeconds(n,x){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(x)
        }, n);
    })
}

(function(){
    let a = resolvedAfterSeconds(1000,1)   // Promise : pending
    // console.log(a);  
    a.then(async function(x){
        let y = await resolvedAfterSeconds(2000,2)
        let z = await resolvedAfterSeconds(1000,3)
        let p = resolvedAfterSeconds(1000,4)
        let q = resolvedAfterSeconds(1000,5)
        console.log((x+y+z+await p +await q));   // When 2 awaits in single line , time will be combined to resolve both awaits.
    })
})()

// 6 seconds
// x = 1
// y = 2
// z = 3
// p = 4
// q = 5