// setTimeout and setInterval are not js functions , they are provided to us by environment : eg node or browser
// setTimeout and setInterval when called make unique ids to identify them

// let counter = 0
// let intervalId

// function hi(){
//     counter ++
//     console.log("Hiiiiiii");
//     if(counter>=3){
//         clearInterval(intervalId)
//     }
// }



// intervalId =  setInterval(hi , 2000)


// Polyfill


function createSetInterval(){

    let intervalId = 0
    let intervalMap = {}

    function setIntervalPolyfill(callback , delay = 0 , ...args){
        var id = intervalId++
        function repeat(){
            intervalMap[id] = setTimeout(() => {
                callback(...args)
                if(intervalMap[id]){
                    repeat()
                }
            }, delay);
        }

        repeat()

        return id
    }
    
    
    function clearIntervalPolyfill(intervalId){
        clearTimeout(intervalMap[intervalId])
        delete intervalMap(intervalId)
    }


    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}


const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetInterval



let counter = 0
let interId

function greeting(){
    counter ++
    console.log("Hiiiiiii");
    if(counter>=3){
        clearIntervalPolyfill(interId)
    }
}

interId = setIntervalPolyfill(greeting , 2000)

