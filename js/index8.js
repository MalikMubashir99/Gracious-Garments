
     function signupform() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name == "" || email == "" || password == "") {
        alert("All fields must be filled out");
        return true;
    }

    if (username.length < 5) {
        alert("Username must be at least 5 characters long");
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    if (password.length < 8) {
        alert("password must be at least 10 characters long");
        return false;
    }

    let signup =document.getElementById('signup').value;
    {
        alert('Congratulation Your Account Is Created.');
     }

};


