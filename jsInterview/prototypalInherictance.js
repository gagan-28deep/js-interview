// When we assign one object proto to other object and allow ohter object to access/inherit properties from object.


let person1 = {
    name : 'Gagu',
    age : 23,

    showDetails : function(){
        console.log(this.name + " " + this.age);
    }
}

let person2 = {
    name : 'Vansh'
}

person2.__proto__ = person1
// console.log(person2.name + " " + person2.age);

person2.showDetails()