class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    return this.name;
  }
}



// Inheritance

class personChild extends person{
    constructor(){
        super('Vansh')
    }
}

// let person1 = new person("Gagu", 23);

let person1 = new personChild();


console.log(person1);
console.log(person1.showDetails());
