const fs = require('fs');

let file1 = fs.promises.readFile('f1.txt')
let file2 = fs.promises.readFile('f2.txt')
let file3 = fs.promises.readFile('f3.txt')

file1.then((data)=>{
    console.log("Data -> " + data);
})

file2.then((data)=>{
    console.log("Data -> " + data);
})

file3.then((data)=>{
    console.log("Data -> " + data);
})