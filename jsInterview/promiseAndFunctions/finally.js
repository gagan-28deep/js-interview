var loader = true

function test(){
    var a = 1+1
    return new Promise(function(resolve , reject){
        if(a===2){
            resolve("Promise resolved YESSSSSSSSS")
        }
        else{
            reject('Promise rejected NOOOOOOOOO')
        }
    })
}

test().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    loader = false
    console.log("Experiment Completed");   // finally will run in both resolve and reject cases
})