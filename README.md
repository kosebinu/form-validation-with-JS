# Form Validation Project

This project demonstrates a browser form with live inline validation using HTML, CSS, and JavaScript. The form validates user input for several fields, providing real-time feedback and error messages until the fields are properly filled in.

## Features

- **Live Inline Validation:** Fields are validated as users interact with them.
- **Custom Error Messages:** Provides user-friendly error messages for invalid input.
- **JavaScript-Powered Validation:** Validation logic is handled via JavaScript (using the `novalidate` attribute on the `<form>` element).
- **Dynamic Styling:** Valid and invalid fields are styled dynamically for better user experience.
- **Reusable Logic:** The validation functions can be reused or extended for additional fields.

## Form Fields

1. **Email**
   - Must be a valid email address.
2. **Country**
   - Must not be empty.
3. **Zip Code**
   - Must be a 5-digit number.
4. **Password**
   - Must be at least 8 characters long.
5. **Confirm Password**
   - Must match the password field.

## Setup

1. Clone or download the repository.
2. Open the `index.html` file in your browser to view the form.
3. The form doesn’t actually submit, but you can interact with the fields and see the validation in action.

## Usage

- Fill out the form fields.
- Error messages will appear for invalid inputs.
- Once all fields are valid, submitting the form will display a success message.