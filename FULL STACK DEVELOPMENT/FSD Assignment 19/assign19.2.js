const multiply = (a, b) => {
    return a * b;
};

const obj = {
    value: 10,
    add: function(num) {
        return this.value + num;
    }
};

console.log(multiply(5,3));     // Output: 15
console.log(obj.add(5));        // Output: 15