// Create Map for contacts
const contacts = new Map();
contacts.set("Abhay", { age: 21, email: "abhay@email.com", location: "Patna" });
contacts.set("Riya", { age: 20, email: "riya@email.com", location: "Delhi" });

// Function to retrieve contact details
function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return "Contact not found.";
    }
}

// Test
console.log(getContactDetails("Abhay"));
console.log(getContactDetails("Ravi"));