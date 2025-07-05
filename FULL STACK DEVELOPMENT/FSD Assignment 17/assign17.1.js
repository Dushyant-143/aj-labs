// Create a Map
const myMap = new Map();

// Add key-value pairs
myMap.set("name", "Abhay");
myMap.set("age", 21);
myMap.set("country", "India");

// Check if key exists
console.log("Has 'age'?", myMap.has("age")); // true

// Retrieve value by key
console.log("Name:", myMap.get("name")); // Abhay

// Iterate all key-value pairs
for (let [key, value] of myMap) {
    console.log(`${key} => ${value}`);
}