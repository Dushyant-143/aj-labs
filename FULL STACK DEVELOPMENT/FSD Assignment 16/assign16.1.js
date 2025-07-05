// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype
Person.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Creating instances
const person1 = new Person("Abhay", 21);
const person2 = new Person("Riya", 19);

// Display their info
person1.displayInfo();
person2.displayInfo();