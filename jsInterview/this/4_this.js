'use strict'

// this keyword in node with non-strict mode

// console.log(this);   //  Window object

// function add(){
//     console.log(this);     // undefined
// }

// add()


// let obj = {
//     name : 'Gagu',
//     f:function(){
//         console.log(this);      // Object itself
//     }
// }

// obj.f()
// console.log(obj.f());



let obj = {
    name : 'Gagu',
    f:function(){
        function g(){

            console.log(this);      // Undefined 
        }
        g()
    }
}

obj.f()