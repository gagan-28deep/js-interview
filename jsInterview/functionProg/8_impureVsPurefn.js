// Impure fn : those whp are dependant on external factor
// Even if call fn with same arguement it is giving different result

// const a = 14

// function addFn(b){
//     console.log("The addition is " , a+b);
// }

// addFn(5)



// Pure Fn   : will return same result for same set of arguements

function addFn(a , b){
    // console.log("The add is " , a+b);   // side effect : As state is getting mutated,
                                        // log , use external screen for result , and fnP says there should not be any changes
                                        // to external factor.
    
    return a + b    // that is good practice , without impurity
}

console.log(addFn(5,8));