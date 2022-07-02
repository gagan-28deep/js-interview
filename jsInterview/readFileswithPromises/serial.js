const fs = require('fs').promises;

let file1 = fs.readFile('f1.txt')


// console.log(file1);

function cb1(data){
    console.log("Data -> " + data);
    let file2 = fs.readFile('f2.txt')
    return file2
}
function cb2(data){
    console.log("Data -> " + data);
    let file3 = fs.readFile('f3.txt')
    return file3
}
function cb3(data){
    console.log("Data -> " + data);
}

file1.then(cb1).then(cb2).then(cb3).catch((err)=>{
    console.log(err);
})