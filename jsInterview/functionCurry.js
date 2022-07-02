// function add(a ,b){
//     console.log(a + b);
// }

// let addWith2 = add.bind(this , 2)   // this will refer to add function , 2 is first arguement of function
// addWith2(7)


// Closure Currying

function add(x){
    return function(y){
        console.log(x + y);
    }

}

let addWith2 = add(2)
addWith2(3)