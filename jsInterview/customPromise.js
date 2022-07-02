const PENDING = 0
const FULFILED = 1
const REJECTED = 2

// Promise is not a function , it is an object : a function when exectued and when we get output, then we will know
//  what to return : resolve , reject or if o/p is not yet received : pending 


// We will make constructor function, in cf this behaves as empty object {}
function customPromise(executor){
    let state = PENDING
    let value = null
    let handlers = []
    let catchers = []

    function resolve(result){
        if(state !==PENDING) return

        state = FULFILED
        value  = result

        handlers.forEach((h)=>h(value))
    }

    function reject(err){
        if(state != PENDING) return

        state = REJECTED
        value = err

        catchers.forEach((c)=>c(value))
    }

    this.then = function(successCallback){
        if(state === FULFILED){
            successCallback(value)
        }
        else{
            handlers.push(successCallback)
        }
    }
    this.catch = function(failureCallback){
        if(state === REJECTED){
            failureCallback(value)
        }
        else{
            catchers.push(failureCallback)
        }
    }

    executor(resolve , reject)
}

const doWork = (res , rej)=>{
    if(2===1){
        setTimeout(() => {res('Promise resolved Hello')}, 2000);
    }
    else{
        setTimeout(() => {rej('Promise rejected Bye')}, 2000);
    }
}

let greetMsg = new customPromise(doWork)

greetMsg.then((val)=>{
    console.log("Then log " + val);
})

greetMsg.catch((val)=>{
    console.log("Catch log " + val);
})