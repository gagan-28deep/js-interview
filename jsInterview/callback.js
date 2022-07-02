// Synchronous Callback

// function greet(personName , age , callback , callback2){
//     let msg = "Hello " + personName
//     let ageofPerson = age
//     callback(msg)
//     callback2(ageofPerson)
// }

// function greeting(name){
//     console.log(name);
// }

// function showAge(age){
//     console.log("Age is " + age);
// }

// greet('Gagan' ,23 ,  greeting , showAge)



// Asynchronous callback

console.log("Hello");

setTimeout(function st1(){
    console.log("I am st1");
} , 5000)

setTimeout(function st(){
    console.log("I am st2");
} , 3000)


function bye(){
    console.log("Bye");
}
bye()