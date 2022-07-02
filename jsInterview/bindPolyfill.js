// let person1 = {
//     name : 'Gagu',
//     age : 23
// }

// let showDetails = function(city , state){
//     console.log(this.name + " " + this.age + " " + city + " " + state);
// }

// let showBind = showDetails.bind(person1 , 'Delhi' , 'ND')
// showBind()




let person1 = {
    name : 'Gagu',
    age : 23
}


let showDetails = function(city , state){
    console.log(this.name + " " + this.age + " " + city + " " + state);
}
Function.prototype.myBind = function(...args){
    let obj = this    // this will point to the object itself when working in prototype
    let param = args.slice(1)
    return function(...args2){
        obj.apply(args[0] , [...param , ...args2])
    }
}

let shMyBind = showDetails.myBind(person1 , 'De' , 'sing')
shMyBind()

let shMyBind2 = showDetails.myBind(person1 , 'Del0')
shMyBind2('singhghg')
