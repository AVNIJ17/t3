// Script for signup form validation
const signupForm = document.getElementById('signupForm');
const signupError = document.getElementById('signupError');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = signupForm.signupUsername.value.trim();
  const email = signupForm.email.value.trim();
  const password = signupForm.signupPassword.value.trim();
  const confirmPassword = signupForm.confirmPassword.value.trim();

  // Perform validation (e.g., check if username, email, passwords are valid)
  // Implement your validation logic here

  // Example validation logic (replace with actual validation)
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    signupError.textContent = 'All fields are required.';
  } else if (password !== confirmPassword) {
    signupError.textContent = 'Passwords do not match.';
  } else {
    // If validation passes, you can proceed with signup
    // Simulate signup by redirecting to a different page
    window.location.href = '/dashboard'; // Replace with your desired page
  }
});