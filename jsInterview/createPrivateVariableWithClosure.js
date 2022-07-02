// Private Variable : varibale we can manipulate(by applying logic) and return from some function , 
//  then it is visible to us. But we cant access directly.


let myFn = (function(){
    let name = ''  // private
    //  We cant access this outside fn scope without return/invoke fns
    // We have instace of name so if we call outside we get undefined

    getName = function(){
        return name
    }

    setName = function(newName){
        name = newName
    }

    return{
        getName : getName,
        setName : setName
    }


})()

myFn.setName('Gagu')
console.log(myFn.getName());

console.log(myFn.name);   // Undefined