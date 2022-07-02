// console.log(a);   // undefined , as we want to access a before initalisation 
// // Undefined , it is till now value is not defined
// var a = 6   // because of hoisting  , a will get memory allocated but value is not initialised


// console.log(a);   // a is not defined , a value is not there


// function now(){
//     // if it is empty fn , it will return undefined

//     return null   // explicitely retuning null
    
// }
// console.log(now());


// let b = global.t

// console.log(b);    // undefined , as be are trying to  access value in global which is not even there. 


// let b = person.name
// console.log(b);    // person is not defined , as there is no person object 


let person = {
    age : 23
}
let b = person.name
console.log(b);    // undefined , as person is existing but name is not property