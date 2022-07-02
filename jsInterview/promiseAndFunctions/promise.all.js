// let p1 = new Promise(function(resolve , reject){
//     resolve('Promise 1 is resolved')
// })
// let p2 = new Promise(function(resolve , reject){
//     resolve('Promise 2 is resolved')
// })
// let p3 = new Promise(function(resolve , reject){
//     resolve('Promise 1 is resolved')
// })


// let promiseAll = Promise.all([p1,p2,p3]) // we can pass all promises in an array
// console.log(promiseAll);
// promiseAll.then((promiseArr)=>{
//     console.log(promiseArr);
// }).catch((err)=>{
//     console.log(err);
// })


let p1 = new Promise(function(resolve , reject){
    resolve('Promise 1 is resolved')
})
let p2 = new Promise(function(resolve , reject){
    reject('Promise 2 is rejected')
})
let p3 = new Promise(function(resolve , reject){
    resolve('Promise 1 is resolved')
})


let promiseAll = Promise.all([p1,p2,p3]) // we can pass all promises in an array
console.log(promiseAll);
// If one promise is rejected , we get that in catch.
promiseAll.then((promiseArr)=>{
    console.log(promiseArr);
}).catch((err)=>{
    console.log(err);
})