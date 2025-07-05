// a) Prevent adding properties
const student = {
    name: "Ravi",
    age: 21,
};
Object.preventExtensions(student);

// b) Check if extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create teacher object
const teacher = {
    subject: "Math"
};

// d) Seal the teacher object
Object.seal(teacher);

// e) Check if sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print both
console.log("Is student extensible?", extensibleStatus);
console.log("Is teacher sealed?", sealedStatus);