const fs = require('fs').promises;

console.log("Before");

let arr = ['f1.txt' , 'f2.txt' , 'f3.txt' , 'f4.txt']

let fileReadPromise = fs.readFile(arr[0])
for(let i = 1 ; i< arr.length ; i++){
    fileReadPromise = fileReadPromise.then((data)=>{

        console.log("Data -> " + data);
        return fs.readFile(arr[i])
    })
}

fileReadPromise = fileReadPromise.then((data)=>{

    console.log("Data -> " + data);
})


console.log("After");