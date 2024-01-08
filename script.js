function submitForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulate authentication logic (replace with actual authentication code)
    if (username === 'example_user' && password === 'example_password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function forgotPassword() {
    alert('Forgot Password link clicked. Implement your forgot password logic.');
}

function signUp() {
    alert('Sign Up link clicked. Implement your sign-up logic.');
}
