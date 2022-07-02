"use strict";

// console.log(this);    // {}

// function add(){
//     console.log(this);    // undefined
// }
// add()

let obj = {
  name: "Gagu",
  f: function () {
    console.log(this); // object itself
  },
};

obj.f();

let obj1 = {
  name: "Gagu",
  f: function () {
    function g() {
      console.log(this);   // undefined
    }
    g();
  },
};

obj1.f();
