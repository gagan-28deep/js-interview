console.log("Program starts");

setTimeout(() => {
    console.log("I am set time out");
}, 1000);

Promise.resolve().then((val)=>{
    console.log("Promise output");
})

console.log("Program ends");