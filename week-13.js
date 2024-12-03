// This script handles interactive functionality on the webpage

// Function to greet the user
function greetUser() {
    // Get the name input value
    const name = document.getElementById("nameInput").value.trim();

    // Decision Logic: Check if input is valid
    if (name === "") {
        // If invalid, display error message
        document.getElementById("outputArea").textContent = "Please enter a valid name!";
        return;
    }

    // String Manipulation: Capitalize the first letter of the name
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    // Create a User object
    const user = new User(formattedName);

    // Generate a fun greeting using a loop
    let greetingMessage = user.getGreeting();
    for (let i = 0; i < 3; i++) {
        greetingMessage += " 🎉";
    }

    // Display the final greeting message
    document.getElementById("outputArea").textContent = greetingMessage;
}

// Class to represent a User
class User {
    constructor(name) {
        this.name = name; // User's name
    }

    // Method to get a friendly greeting
    getGreeting() {
        return `Hello, ${this.name}! Welcome to Nahom's Interactive Page.`;
    }
}

// Example: Adding a testing log for demonstration purposes
console.log(new User("TestUser").getGreeting());
