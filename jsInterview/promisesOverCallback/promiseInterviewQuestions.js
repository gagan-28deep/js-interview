// setTimeout(function(){
//     console.log(1);
// });
// setTimeout(function(){
//     console.log(2);
// });

// let p = new Promise(function(resolve , reject){
//     resolve()
// })
// console.log(3);

// p.then(function(){
//     console.log(4);
// })

// p.then(function(){
//     console.log(5);
// })

// setTimeout(function(){
//     console.log(6);
// });

// Otput ->   3  4  5  1  2  6  

// Refactor above code

// setTimeout(function(){
//     console.log(4);
// });
// setTimeout(function(){
//     console.log(5);
// });

// let p = new Promise(function(resolve , reject){
//     resolve()
// })
// console.log(1);

// p.then(function(){
//     console.log(2);
// })

// p.then(function(){
//     console.log(3);
// })

// setTimeout(function(){
//     console.log(6);
// });



// Question 2

// let p = new Promise(function(resolve , reject){
//     reject(new Error("some error"))
//     setTimeout(function(){
//         reject(new Error("some error"))
//     }, 1000);
//     reject(new Error("some error"))
// })

// p.then(null , function(err){    // Then takes 2 cb function : 1st is success cb , 2nd is failure cb
//     // Because of null , code executes then block .
//     console.log(1);
//     console.log(err);
// }).catch(function(err){
//     console.log(2);
//     console.log(err);
// })


// Question 3

// Create a setTimeout with Promises

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve , ms))
}

delay(3000).then(()=>console.log('runs after 3 seconds'))