// Map : we will use custom map


let myArr = [1,2,3,4,5,6]
let squaredArr = myArr.map(function(x){
    return x*x
})
// console.log(myArr);
// console.log(squaredArr);


// function myMap(arr , cb){
//     let newArr = []

//     for(let i = 0 ; i < arr.length ; i++){
//         newArr.push(cb(arr[i]))
//     }

//     return newArr
// }

// function square(x){
//     return x*x
// }

// console.log(myMap(myArr , square)); 


function myFilter(arr , cb){
    let newArr = []

    for(let i = 0 ; i<arr.length ; i++){
        if(cb(arr[i])){

            newArr.push(arr[i])
        }
    }


    return newArr
}

function isEven(x){
    return x%2===0
}

console.log(myFilter(myArr , isEven));