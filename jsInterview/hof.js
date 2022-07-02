let myArr = [1,2,3,4,5,6]

// Map
let newArr = myArr.map(function(x){
    return x * x
})

console.log(myArr);
console.log(newArr);

// Filter

// let filterArr = myArr.filter(function(x){
//    return x%2===0
// })

// console.log(filterArr);


// Reduce

let redArr = myArr.reduce(function(accumulator , x){
    return accumulator + x
} , 0)

console.log(redArr);