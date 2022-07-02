// function checkValue(val){
//     return val ? console.log("Truthy") : console.log("Falsy");
// }

// checkValue("23")


// Question

(function(){
    if((-100 && 100 && '0') || [] == true || 0){
        console.log(1);     // 1
    }

    if([] || (0 && false)){
        console.log(2);    // 2
    }

    if(Infinity && NaN && 'false'){
        console.log(3);    // not returned
    }

    if(""){
        console.log(4);   // not returned
    }

    else{
        console.log(5);    // 5
        if(({} || false === "") && !(null &&undefined)){
            console.log(6);    // 6
        }
    }
})()