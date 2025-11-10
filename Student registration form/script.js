// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the form and all its fields
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');

    // --- Get all form fields ---
    const firstNameField = document.getElementById('first-name');
    const lastNameField = document.getElementById('last-name');
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const dobField = document.getElementById('dob');
    const genderGroup = document.getElementById('gender-group');
    const courseField = document.getElementById('course');
    const addressField = document.getElementById('address');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const termsField = document.getElementById('terms');
    const termsGroup = document.getElementById('terms-group');


    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Clear all previous errors and success messages
        clearAllErrors();
        successMessage.innerText = '';

        // Flag to track overall form validity
        let isValid = true;

        // --- 1. First Name Validation ---
        if (firstNameField.value.trim() === '') {
            setError(firstNameField, 'First Name cannot be empty.');
            isValid = false;
        }

        // --- 2. Last Name Validation ---
        if (lastNameField.value.trim() === '') {
            setError(lastNameField, 'Last Name cannot be empty.');
            isValid = false;
        }

        // --- 3. Username Validation ---
        if (usernameField.value.trim() === '') {
            setError(usernameField, 'Username cannot be empty.');
            isValid = false;
        }

        // --- 4. Email Validation ---
        const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
        if (emailField.value.trim() === '') {
            setError(emailField, 'Email cannot be empty.');
            isValid = false;
        } else if (!emailRegex.test(emailField.T.value.trim())) {
            setError(emailField, 'Email format must be: letters@3letters.2or3letters (e.g., name@web.com)');
            isValid = false;
        }

        // --- 5. Phone Number Validation ---
        const phoneRegex = /^\d{10}$/;
        if (phoneField.value.trim() === '') {
            setError(phoneField, 'Phone number cannot be empty.');
            isValid = false;
        } else if (!phoneRegex.test(phoneField.value.trim())) {
            setError(phoneField, 'Phone number must be exactly 10 numeric digits.');
            isValid = false;
        }

        // --- 6. Date of Birth Validation ---
        if (dobField.value === '') {
            setError(dobField, 'Date of Birth cannot be empty.');
            isValid = false;
        }

        // --- 7. Gender Validation ---
        if (!document.querySelector('input[name="gender"]:checked')) {
            // Special error handling for radio group
            const errorContainer = document.getElementById('gender-error');
            errorContainer.innerText = 'Please select a gender.';
            genderGroup.classList.add('error-group');
            isValid = false;
        }

        // --- 8. Course Validation ---
        if (courseField.value === '') {
            setError(courseField, 'Please select a course.');
            isValid = false;
        }

        // --- 9. Address Validation ---
        if (addressField.value.trim() === '') {
            setError(addressField, 'Address cannot be empty.');
            isValid = false;
        }

        // --- 10. Password Validation ---
        const password = passwordField.value;
        if (password === '') {
            setError(passwordField, 'Password cannot be empty.');
            isValid = false;
        } else if (password.length < 7) {
            setError(passwordField, 'Password must be at least 7 characters long.');
            isValid = false;
        } else {
            let errors = [];
            if (!/[A-Z]/.test(password)) {
                errors.push('one capital letter');
            }
            if (!/\d/.test(password)) {
                errors.push('one digit');
            }
            if (!/[&@$#]/.test(password)) {
                errors.push('one special character (&,$,#,@)');
            }

            if (errors.length > 0) {
                setError(passwordField, 'Password must contain at least: ' + errors.join(', ') + '.');
                isValid = false;
            }
        }

        // --- 11. Confirm Password Validation ---
        if (confirmPasswordField.value.trim() === '') {
            setError(confirmPasswordField, 'Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPasswordField.value) {
            setError(confirmPasswordField, 'Passwords do not match.');
            isValid = false;
        }

        // --- 12. Terms Validation ---
        if (!termsField.checked) {
            // Special error handling for checkbox
            const errorContainer = document.getElementById('terms-error');
            errorContainer.innerText = 'You must agree to the terms.';
            termsGroup.classList.add('error-group');
            isValid = false;
        }

        // --- Final Check ---
        if (isValid) {
            successMessage.innerText = 'Registration Successful!';
            form.reset(); // Clear all form fields
        }
    });

    /**
     * Helper function to set an error message for a standard field.
     * @param {HTMLElement} field - The input element (input, select, textarea).
     * @param {string} message - The error message to display.
     */
    function setError(field, message) {
        field.classList.add('error-input');
        const errorContainer = document.getElementById(field.id + '-error');
        if (errorContainer) {
            errorContainer.innerText = message;
        }
    }

    /**
     * Helper function to clear all error messages and styles.
     */
    function clearAllErrors() {
        // Remove error classes from all inputs, selects, and textareas
        const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
        inputs.forEach(input => {
            input.classList.remove('error-input');
        });

        // Remove error classes from special groups
        genderGroup.classList.remove('error-group');
        termsGroup.classList.remove('error-group');

        // Clear text from all error message containers
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.innerText = '';
        });
    }
});