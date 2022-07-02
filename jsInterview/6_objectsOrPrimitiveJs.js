// Everything is object

// object = key : value

// let obj = {
//     fName : 'Gagu',
//     lName : 'Manku',
//     sayHi : function(){
//         console.log("Hello");
//     }
// }

// console.log(obj)
// // Loop
// for(key in obj){
//     console.log(key + " " + obj[key]);
// }

// obj.sayHi()

// Arrays are just emulated  , they are in fact objects only

// let arr = [1,2,3,4,5]
// // Property add
// arr.myProp = "Hello"
// console.log(arr);
// // Method add
// arr.Fname = function print(){
//     console.log("Hello from array");
// }
// console.log(arr);
// arr.Fname()

// // For in Loop
// for(key in arr){
//     // Keys acts like indexes
//     console.log(key + " " + arr[key]);
// }


// In fuctions   : fn also are objects
// In fn : code property that can be executed when you invoke a fn.

// function fn(){
//     console.log("Hello from fn");
// }
// fn.prop = "I am a property of fn"

// fn.myFn = function fn(){
//     console.log("Hello from method");
// }
// // console.log(fn);
// fn()
// fn.myFn()
// console.log(fn.prop)

// Other than primitive data types  : numbers , strings , boolean , null , undefined , symbols 
//  Everything is object in js