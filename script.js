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
const users = [];

// Function to add a new user
function add() {
    const userNameIn1 = document.getElementById('in1').value;
    const passwordIn2 = document.getElementById('in2').value;
    const messageEl = document.getElementById('s1');
    
    if (passwordIn2.length < 8) {
        messageEl.className = "error-message";
        messageEl.textContent = "Password must contain at least 8 characters";
    } else {
        const user = {
            username: userNameIn1,
            password: passwordIn2
        };
        users.push(user);
        messageEl.className = "success-message";
        messageEl.textContent = "✓ User added successfully!";
        // Clear inputs
        document.getElementById('in1').value = "";
        document.getElementById('in2').value = "";
    }
}

        // Function to display users in a table
function show() {
            const table = document.getElementById('table');
            // Clear existing rows (except header)
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }
            
            // Add each user to the table
            for (let i = 0; i < users.length; i++) {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                
                cell1.textContent = users[i].username;
                cell2.textContent = users[i].password;
            }
        }

// Function to toggle password visibility
function showPass() {
            const passInput = document.getElementById('in4');
            passInput.type = passInput.type === 'password' ? 'text' : 'password';
        }

// Function to validate login
function login() {
            const userNameIn3 = document.getElementById('in3').value;
            const passwordIn4 = document.getElementById('in4').value;
            const errorSpan = document.getElementById('s2');
            
            if (!userNameIn3) {
                errorSpan.textContent = "Username must be filled out";
                return false;
            } else if (!passwordIn4) {
                errorSpan.textContent = "Password must be filled out";
                return false;
            }
            
            // Check if user exists
            for (let i = 0; i < users.length; i++) {
                if (userNameIn3 === users[i].username && passwordIn4 === users[i].password) {
                    return true; // Allow form submission
                }
            }
            
            errorSpan.textContent = "Username and password do not match";
            return false; // Prevent form submission
        }