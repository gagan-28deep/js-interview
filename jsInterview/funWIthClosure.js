// for(var i = 0 ; i<=5 ; i++){
//     console.log(i);
// }

// console.log(i);

// for(var i = 0 ; i<=5 ; i++){
//     setTimeout(() => {
//        console.log(i);
//     }, 1000);
// }

// To solve this

// for (var i= 0 ; i<=5 ; i++){
//     (function(){
//         var j = i   // as we have function in loop and for every iteration j will be set with new val
//         setTimeout(() => {
//             console.log(j);
//         }, 1000);
//     })()
// }

// Another method

// for (var i = 0; i <= 5; i++) {
//     delay(i)
// }

// function delay(i){
//     setTimeout(function log()  {
//         console.log(i);
//     }, 1000);
// }

// let i = 0

// for( ; i<=5 ; i++){
//     setTimeout(() => {
//        console.log(i);
//     }, 1000);
// }
