const fs = require('fs');


// Parallel Reading

// console.log("Before");

// fs.readFile('f1.txt' , cb1)
// fs.readFile('f2.txt' , cb2)
// fs.readFile('f3.txt' , cb3)
// function cb1(err , data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Data is " + data);
//     }
// }
// function cb2(err , data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Data is " + data);
//     }
// }
// function cb3(err , data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Data is " + data);
//     }
// }

// console.log("After");


// Serial Reading

console.log("Before");

fs.readFile('f1.txt' , cb1)

// Callback Hell

function cb1(err, data){
    console.log("Data is " + data);
    fs.readFile('f2.txt' , cb2)
    function cb2(err,data){
        console.log("Data is "+ data);
        
        fs.readFile('f3.txt' , cb3)
        function cb3(err,data){
            console.log("Data is " + data);
        }
    }
}


console.log("After");