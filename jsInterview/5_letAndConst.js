// let fruits = "apple"
// console.log("Line 2" , fruits);   // apple

// {
//     let fruits;
//     console.log("Line 6 " , fruits);   // undefined

//     fruits = "orange"
//     console.log("Line 9 " , fruits);   // orange
// }
// console.log("Line 11 " , fruits);   // apple



// Question

// This is also variable shadowing : meaning inner block variable shadows outer variables
// Works in let , var and const
// THis is legal shadow


// Illegal shadow : if outer is var or let and inner is other . 

// let fruits = "oranges"
// console.log("Line 1" , fruits);   // oranges

// {
//     let fruits
//     console.log("Line 2 " , fruits);   // undefined
//     fruits = "apple"
//     {
//         console.log("Line 3 " , fruits);   // apple
//     }
//     console.log("Line 4 " , fruits);    // apple
// }
// console.log("Line 5 " , fruits);    // oranges


// Question

let letFruit = "orange"
var varFruit = "orange"

console.log("letFruit" , letFruit , "varFruit" , varFruit);    // orange orange

{
    let letFruit = "apple"
    var varFruit = "apple"
    console.log("letFruit" , letFruit , "varFruit" , varFruit);   // apple  apple
}

console.log("letFruit" , letFruit , "varFruit" , varFruit);    // orange   apple