// let arr = [ 1,2,3,4]

// let coypArr = arr

// coypArr[1] = 7

// console.log(arr);
// console.log(coypArr);


// Spread Operator Method  : Shallow copy  : when we create copy of object on first level only.

// let sports = ['Cricket' , 'Football' , 'Swimming']

// let copySports = [...sports]

// copySports[1] = 'Baseball'

// console.log(sports);
// console.log(copySports);


// let sports = ['Cricket' , 'Football' , 'Swimming' , {a : 'Hockey' , b : 'Tennis'}]

// let copySports = [...sports]     // gives different referance

// copySports[3]['a'] = 'Baseball'   // it doesnt work is nested objects

// console.log(sports);
// console.log(copySports);



// Another method of shallow copy by Arrays.from

// let sports = ['Cricket' , 'Football' , 'Swimming' , {a : 'Hockey' , b : 'Tennis'}]

// let copySports = Array.from(sports)

// copySports[3]['a'] = 'Baseball'

// console.log(sports);
// console.log(copySports);




// Another method of shallow copy by slice
// let sports = ['Cricket' , 'Football' , 'Swimming' , {a : 'Hockey' , b : 'Tennis'}]

// let copySports = sports.slice(sports)

// copySports[3]['a'] = 'Baseball'

// console.log(sports);
// console.log(copySports);




// Deep Copy


let sports = ['Cricket' , 'Football' , 'Swimming' , {a : 'Hockey' , b : 'Tennis'}]


// JSON. stringify() takes a JavaScript object and then transforms it into a JSON string. 
// JSON. parse() takes a JSON string and then transforms it into a JavaScript object.

let copySports = JSON.parse(JSON.stringify(sports))  // it can work for nested objects too. it makes differennt referance

copySports[3]['a'] = 'Baseball'

console.log(sports);
console.log(copySports);