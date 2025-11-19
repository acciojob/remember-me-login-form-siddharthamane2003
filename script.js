// Elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');

// Check if credentials exist in localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
        existingBtn.style.display = 'block';
    }
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
        // Save credentials
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingBtn.style.display = 'block';
    } else {
        // Remove saved credentials
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingBtn.style.display = 'none';
    }

    // Optionally, reset form fields
    loginForm.reset();
});

// Handle existing user login
existingBtn.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
