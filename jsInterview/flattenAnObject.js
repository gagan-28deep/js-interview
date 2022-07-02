// Flatten an object : we want to remove any heirarchy , or nesting from our object.


function flattenObj(obj , parent , res = {}){
    for(let key in obj){
        let propName = parent ? parent + '_' + key : key

        if(typeof obj[key] == 'object'){
            flattenObj(obj[key] , propName , res)
        }
        else{
            res[propName] = obj[key]
        }
    }

    return res
}

let person1 = {
    name : 'Adam',
    age : 23,

    address : {
        city : 'Noida',
        state : 'Up'
    }
}


let arr = flattenObj(person1)

console.log(arr);