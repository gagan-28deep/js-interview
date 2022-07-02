// let p1 = Promise.resolve('promise resolved')    // returns a promise
// console.log(p1);
// p1.then((val)=>{
//     console.log(val);
// })


let p1 = Promise.reject('promise rejected')    // returns a promise
console.log(p1);
p1.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
})