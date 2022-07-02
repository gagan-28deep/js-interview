

// Question

// console.log("Line 1 "  , varName);    // Undefined
// var varName = 10;

// function b(){
//     console.log("Line 5 " , varName);    // 10
// }

// console.log("Line 8" , varName);    //10

// function fn(){
//     console.log("Line 14 " , varName);        //undefined
//     var varName = 20  
//     b();   
//     console.log("Line 17" , varName);    // 20
// }

// fn();


// Question

console.log("Line 1 "  , varName);    // Undefined
var varName = 10;

console.log("Line 8" , varName);    //10

function fn(){
    console.log("Line 14 " , varName);        //undefined
    var varName = 20  
    function b(){
        console.log("Line 5 " , varName);    // 20
    }
    b();   
    
    console.log("Line 17" , varName);    // 20
}

fn();