

function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (username == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (username.length < 5) {
        alert("Username must be at least 5 characters long");
        return true;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return true;
    }

    if (message.length < 9) {
        alert("Message must be at least 10 characters long");
        return true;
    }

    let send =document.getElementById('send').value;
    {
        alert('Your Message is Send');
     }

};
