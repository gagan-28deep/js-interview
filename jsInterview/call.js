let person1 = {
    name : 'Gagu',
    age : 23,
    
    // showDetails : function(){
    //     console.log(this.name  + " is " + this.age + " years old");
    // }
}

let person2 = {
    name : 'Jass', 
    age : 25
}


// We can define globally too

// let showDetails = function(){
//     console.log(this.name  + " is " + this.age + " years old");
// }

// We can pass arguements too

let showDetails = function(city , car){
    console.log(`${this.name} is ${this.age} yearls old , lives in ${city} and drives ${car}`);
}

// Function borrowing
// showDetails.call(person2)

// showDetails.call(person1)

// Call fn with external arguements
// showDetails.call(person1 , "Noida" , "Merc")


// Apply is also kind of same , but instead of arguements we have to pass array of arguements

showDetails.apply(person2 , ['Delhi' , 'Audi'])


// Bind , bind creates function of a function , and we can call it whenever we like.

let bindFun = showDetails.bind(person1 , "up" , "scorpio")

bindFun()