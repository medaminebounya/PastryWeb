document.addEventListener('DOMContentLoaded', function() {
    const expandMenuBtn = document.getElementById('expandMenuBtn');
    const menuSection = document.querySelector('.Menu');
    
    expandMenuBtn.addEventListener('click', function() {
        menuSection.classList.toggle('show-hidden');
        this.textContent = menuSection.classList.contains('show-hidden') 
            ? 'Show Less' 
            : 'Show More';
    });
});
var users = [];
//Function to add user
function add() {
    var username = document.getElementById('in1').value;
    var password = document.getElementById('in2').value;
    var message = document.getElementById('s1');

    if (password.length < 8) {
        message.textContent = "Password must be 8+ characters";
        message.style.color = "red";
    } else {
        // Store as plain strings
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        message.textContent = "Account created!";
        message.style.color = "green";

        setTimeout(function () {
            window.location.href = "MainPage.html";
        }, 1000);
    }
}

// Function to toggle password visibility
function showPass() {
            const passInput = document.getElementById('in4');
            passInput.type = passInput.type === 'password' ? 'text' : 'password';
        }

//Function to log in
function login() {
    var username = document.getElementById('in3').value;
    var password = document.getElementById('in4').value;
    var message = document.getElementById('s2');

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";
        setTimeout(function () {
            window.location.href = "MainPage.html";
        }, 1000);
    } else {
        message.textContent = "Wrong username/password";
        message.style.color = "red";
    }

    return false;
}