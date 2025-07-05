const car = {
    brand: "Toyota",
    model: "Innova",
    displayDetails: function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

// Test
car.displayDetails();