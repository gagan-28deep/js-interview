// Types of Functions : 

// 1. Function Statement

// function sayHello(param){
//     console.log("Hello" + param);
// }

// // sayHello()    // Hello

// // sayHello()   Helloundefined

// let rval = sayHello()
// console.log("Rval = " + rval);   //Rval = undefined


// 2. Functions are first class citizen : Treated as variable

// Here function name is optional
// This is fn expression
// let fnCont = function (){
//     console.log("I am anonymous");
// }

// fnCont()


// 3 IIFE : Imediately invoked fn expression
// (function (){
//     console.log("Hello I am IIFE");
// })()

// 4. Arrow Fn

// let fn = (num , a)=>{

//     console.log("The add is =" ,  num + a)
// }

// fn(5,6)


// 5. Fn passed as a parameter 

// function sayHello(param){
//     param()
//     console.log("Hello");
// }

// function smaller(){
//     console.log("I am smaller fn");
// }


// let rval = sayHello(smaller)
// console.log(rval);

// 6. Functions can be returned from function

function outer(){
    console.log("I am outer returning inner");
    return function(){
        console.log("I am inner fn");
    }
}

let rval = outer()
rval()