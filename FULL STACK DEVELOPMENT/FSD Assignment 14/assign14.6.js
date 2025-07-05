// Curry function that returns curried version of any function
function curry(func) {
    return function(a) {
        return function(b) {
            return func(a, b);
        };
    };
}

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Creating a curried version of add function
const curriedAdd = curry(add);

// Testing the curried function
console.log(`Sum of 4 and 5 is: ${curriedAdd(4)(5)}`);
console.log(`Sum of 10 and 20 is: ${curriedAdd(10)(20)}`);