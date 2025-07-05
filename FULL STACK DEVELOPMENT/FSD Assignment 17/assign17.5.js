const person1 = {
    name: "Abhay",
    age: 21
};

const person2 = {
    name: "Riya",
    age: 20
};

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

// Use call method
introduce.call(person2); // Riya will introduce herself
introduce.call(person1); // Abhay will introduce himself