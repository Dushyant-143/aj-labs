let myArray = [1, 2, 3];

// Function to add numbers using rest operator
function addToArray(...nums) {
    myArray = [...myArray, ...nums];
    console.log("Updated Array:", myArray);
}

// Test
addToArray(4, 5, 6);
addToArray(7, 8);