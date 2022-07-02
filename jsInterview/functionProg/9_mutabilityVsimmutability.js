// mutate
// const person1 = {
//     name : 'Gagu',
//     age : 23
// }

// const person2 = person1

// console.log(person1);     
// console.log(person2);
// { name: 'Gagu', age: 23 }
// { name: 'Gagu', age: 23 }


// person2.age = 46

// console.log(person1);     
// console.log(person2);
// { name: 'Gagu', age: 46 }
// { name: 'Gagu', age: 46 }

// Immutate

const person1 = {
    name : 'Gagu',
    age : 23
}

// const person2 = Object.assign({} , person1)   // we get new reference

// ANother Method

const person2 = {...person1}


console.log(person1);     
console.log(person2);
// { name: 'Gagu', age: 23 }
// { name: 'Gagu', age: 23 }


person2.age = 46

console.log(person1);     
console.log(person2);
// { name: 'Gagu', age: 23 }
// { name: 'Gagu', age: 46 }
