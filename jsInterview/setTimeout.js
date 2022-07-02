// setTimeout and setInterval are not js functions , they are provided to us by environment : eg node or browser
// setTimeout and setInterval when called make unique ids to identify them


function greet(){
    console.log("hello");
}

setTimeout(greet , 5000)

console.log("Bye");