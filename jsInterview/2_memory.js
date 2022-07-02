// console.log(a);   //undefined
// var a;
// console.log(a);   //undefined
// a = 10
// console.log(a);  // 10

// fb()
// function fb(){
//     console.log("HEllo calling before declaration0");
// }

//  Question

// function real(){
//     console.log("Hello i am real");
// }

// function real(){
//     console.log("Hello ! =?  i am real");
// }

// real()
// function real(){
//     console.log("Hello ++++++++++ i am real");
// }

// real()

// Question

console.log("varName", varName); // Undefined
var varName;

console.log("varName", varName); // Undefined
varName = "Gagu";
console.log("varName", varName); //Gagu

fn(); // "Hello from Fn"

function fn() {
  console.log("Hello from Fn");
}

fn(); // "Hello from Fn"

// fnCont();   // "Hello from expr"

// because that second function is a function expression and not a function declaration.
//  In hoisting only variable declarations and function declarations are moved at the top of our code and
//  since the second function is not a function declaration it is not moved to top,
// so now its like you are trying to call a function which does not exist. This is the reason it will give error

// error because
// The code execution will break because with function initialization, the variable  
// will be hoisted as a variable, not as function. So with variable hoisting, 
// memory allocation will happen with the initialization with undefined. That's the reason we will get the error:

var fnCont = function () {
  console.log("HEllo from expr");
};

fnCont(); //"Hello from expr"
