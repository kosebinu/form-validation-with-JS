document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const zip = document.getElementById("zip");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
  
    const emailError = document.getElementById("emailError");
    const countryError = document.getElementById("countryError");
    const zipError = document.getElementById("zipError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");
  
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
          emailError.textContent = "Please enter a valid email address.";
          return false;
        }
        emailError.textContent = "";
        return true;
      };
      
  
    const validateCountry = () => {
      if (country.value.trim() === "") {
        countryError.textContent = "Country is required.";
        return false;
      }
      countryError.textContent = "";
      return true;
    };
  
    const validateZip = () => {
      if (!/^\d{5}$/.test(zip.value)) {
        zipError.textContent = "Zip code must be 5 digits.";
        return false;
      }
      zipError.textContent = "";
      return true;
    };
  
    const validatePassword = () => {
      if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        return false;
      }
      passwordError.textContent = "";
      return true;
    };
  
    const validateConfirmPassword = () => {
      if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
      }
      confirmPasswordError.textContent = "";
      return true;
    };
  
    const validateForm = () => {
      const isEmailValid = validateEmail();
      const isCountryValid = validateCountry();
      const isZipValid = validateZip();
      const isPasswordValid = validatePassword();
      const isConfirmPasswordValid = validateConfirmPassword();
  
      return isEmailValid && isCountryValid && isZipValid && isPasswordValid && isConfirmPasswordValid;
    };
  
    email.addEventListener("blur", validateEmail);
    country.addEventListener("blur", validateCountry);
    zip.addEventListener("blur", validateZip);
    password.addEventListener("blur", validatePassword);
    confirmPassword.addEventListener("blur", validateConfirmPassword);
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm()) {
        successMessage.textContent = "Form submitted successfully!";
      } else {
        successMessage.textContent = "";
        alert("Please fix the errors before submitting the form.");
      }
    });
  });
  