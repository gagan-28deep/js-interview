// function fn(){
//     console.log(a);
//     var a = 10
//     console.log(a);
//     if(a === 10){
//         var a
//         console.log(a);
//     }
//     console.log(a);
// }

// fn()


// Question

var a = 10;
console.log("Line 2 " , a);    // 10
function fn(){
    console.log("Line 4 " , a);      // undefined
    var a = 20
    a++      // 21
    console.log("Line 7 " , a);   // 21
    if(a){
        var a = 30
        a++
        console.log("Line 11" , a);    // 31
    }
    console.log("Line 13" ,  a);    // 21
}
fn()

console.log("Line 16" , a);   // 10
