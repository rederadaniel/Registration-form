const toggleForms = (hideForm, showForm) => {
    hideForm.style.transition = 'opacity 0s';
    hideForm.style.opacity = '0';
    setTimeout(() => {
        hideForm.style.display = 'none';
        showForm.style.display = 'flex';
        showForm.style.opacity = '0';
    }, 0);
};

document.getElementById('loginBtn').onclick = () => toggleForms(document.getElementById('registerForm'), document.getElementById('loginForm'));
document.getElementById('registerBtn').onclick = () => toggleForms(document.getElementById('loginForm'), document.getElementById('registerForm'));

// Link to switch to login from register
document.getElementById('loginLnk').onclick = () => toggleForms(document.getElementById('registerForm'), document.getElementById('loginForm'));

// Link to switch to register from login
document.getElementById('registerLnk').onclick = () => toggleForms(document.getElementById('loginForm'), document.getElementById('registerForm'));

// Forgot password modal
document.getElementById('forgotPasswordBtn').onclick = () => {
    document.getElementById('forgotPasswordModal').style.display = 'flex';
};

document.getElementById('closeModal').onclick = () => {
    document.getElementById('forgotPasswordModal').style.display = 'none';
    document.getElementById('forgotEmail').value = ''; // Clear email input
};

document.getElementById('sendResetLinkBtn').onclick = () => {
    const email = document.getElementById('forgotEmail').value;
    // Sending email 
    document.getElementById('forgotPasswordModal').style.display = 'none';
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = `Successful send to ${email}`;
    messageParagraph.className = 'message';
    document.getElementById('loginForm').appendChild(messageParagraph);
    messageParagraph.style.display = 'block';
};

// Message successful
function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const messageParagraph = document.getElementById('loginMessage');
    messageParagraph.textContent = `Login successful`;
    messageParagraph.style.display = 'block';
}

function validateRegister() {
    const username = document.getElementById('registerUsername').value;
    const messageParagraph = document.getElementById('registerMessage');
    messageParagraph.textContent = `Registration successful`;
    messageParagraph.style.display = 'block';
}

// Toggle password visibility
const togglePasswordVisibility = (inputId, iconId) => {
const input = document.getElementById(inputId);
const icon = document.getElementById(iconId);
input.type = input.type === 'password' ? 'text' : 'password';
icon.classList.toggle('fa-eye-slash');
};

document.getElementById('toggleLoginPassword').onclick = () => togglePasswordVisibility('loginPassword', 'toggleLoginPassword');
document.getElementById('toggleRegisterPassword').onclick = () => togglePasswordVisibility('registerPassword', 'toggleRegisterPassword');