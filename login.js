// Script for login form validation
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();

  // Perform validation (e.g., check if username and password are not empty)
  // Implement your validation logic here

  // Example validation logic (replace with actual validation)
  if (username === '' || password === '') {
    loginError.textContent = 'Username and password are required.';
  } else {
    // If validation passes, you can proceed with login
    // Simulate login by redirecting to a different page
    window.location.href = '/dashboard'; // Replace with your desired page
  }
});