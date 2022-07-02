// let obj = {
//     name : 'gagu',
//     age : 23
// }

// let newObj = obj

// newObj.age = 67
// console.log(obj);
// console.log(newObj);


// Shallow Copy

// let obj = {
//     name : 'gagu',
//     age : 23,
//     hobbies : ['Cricket' , 'Football' , 'Swimming']
    
// }

// let newObj = {...obj}

// newObj.age = 67
// console.log(obj);
// console.log(newObj);


// Another method of shallow copy


let obj = {
    name : 'gagu',
    age : 23,
    hobbies : ['Cricket' , 'Football' , 'Swimming']
    
}

let newObj = Object.assign({} , obj)
newObj.hobbies[0] = 'Football'

// newObj.age = 67
console.log(obj);
console.log(newObj);



// Deep Copy

// let obj = {
//     name : 'gagu',
//     age : 23,
//     hobbies : ['Cricket' , 'Football' , 'Swimming']
    
// }

// let newObj = JSON.parse(JSON.stringify(obj))
// newObj.hobbies[0] = 'Football'

// // newObj.age = 67
// console.log(obj);
// console.log(newObj);
