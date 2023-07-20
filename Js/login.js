// Get the form element
let form = document.querySelector('.login100-form');

// Add an event listener for the 'submit' event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the email and password input elements
    let emailInput = document.querySelector('input[name="email"]');
    let passwordInput = document.querySelector('input[name="pass"]');

    // Get the values of the email and password inputs
    let email = emailInput.value;
    let password = passwordInput.value;

    // Define a regular expression to validate the email address
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Validate the email address
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate the password
    if (password.length < 8) {
        alert('Your password must be at least 8 characters long.');
        return;
    }

    // If all validations pass, submit the form
    form.submit();
});
