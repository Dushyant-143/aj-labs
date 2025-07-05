const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(obj) {
    for (let key in obj) {
        console.log(`Property: ${key}, Value: ${obj[key]}`);
    }
}

// Call the function
displayStudentInfo(student);