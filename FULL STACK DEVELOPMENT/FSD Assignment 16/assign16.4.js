// Class implementation of Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Create instances
const p1 = new Person("Abhay", 21);
const p2 = new Person("Nisha", 22);

// Display info
p1.displayInfo();
p2.displayInfo();