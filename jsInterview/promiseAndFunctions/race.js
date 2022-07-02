// let p1 = new Promise(function(resolve , reject){
//     resolve('Promise 1 is resolved')
// })
// let p2 = new Promise(function(resolve , reject){
//     resolve('Promise 2 is resolved')
// })
// let p3 = new Promise(function(resolve , reject){
//     resolve('Promise 1 is resolved')
// })

// Promise.race([p1 , p2, p3]).then((val)=>{  // race wont wait for all promise to resolve , if even one is resolved or whatever it 
//                                             // gets as resolved , it will return       
//     console.log(val);   
// }).catch((err)=>{
//     console.log(err);
// })



// let p1 = new Promise(function(resolve , reject){
//     reject('Promise 1 is rejected')
// })
// let p2 = new Promise(function(resolve , reject){
//     resolve('Promise 2 is resolved')
// })
// let p3 = new Promise(function(resolve , reject){
//     resolve('Promise 1 is resolved')
// })

// Promise.race([p1 , p2, p3]).then((val)=>{  // race wont wait for all promise to resolve , if even one is resolved/rejected or whatever it 
//                                             // gets as resolved , it will return       
//     console.log(val);   
// }).catch((err)=>{
//     console.log(err);
// })


let p1 = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve('P1 is resolved')
    }, 2000);
})
let p2 = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve('P2 is resolved')
    }, 1000);
})

Promise.race([p1,p2]).then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})