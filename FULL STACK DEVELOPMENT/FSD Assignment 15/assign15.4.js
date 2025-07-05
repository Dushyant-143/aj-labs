const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
];

// a. Add a Student
function addStudent(student) {
    students.push(student);
}

// b. Update Student Information by ID
function updateStudent(id, newInfo) {
    const student = students.find(s => s.id === id);
    if (student) {
        Object.assign(student, newInfo);
    }
}

// c. Delete a Student by ID
function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}

// d. List All Students
function listStudents() {
    console.log("Student List:");
    students.forEach(s => console.log(s));
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(s => s.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, s) => sum + s.age, 0);
    return totalAge / students.length;
}

// --- TESTING ---
addStudent({ id: 4, firstName: "Riya", lastName: "Sharma", age: 21, grade: "B" });
updateStudent(2, { grade: "A", age: 23 });
deleteStudent(3);
listStudents();

console.log("Students with grade A:", findStudentsByGrade("A"));
console.log("Average Age:", calculateAverageAge());