const person = { 
    name: "Alice", 
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`); 
        }, 1000);
    }
};

person.greet();