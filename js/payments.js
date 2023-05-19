// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and pay now button elements
  var form = document.querySelector('form');
  var payNowButton = document.getElementById('pay-now-btn');

  // Add event listener to the Pay Now button click event
  payNowButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent button click from submitting the form

    // Validate the input fields
    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var country = document.getElementById('country');
    var address = document.getElementById('address');
    var aptNumber = document.getElementById('apt-number');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var zipcode = document.getElementById('zipcode');
    var cardNumber = document.getElementById('Card');
    var cardName = document.getElementById('Nameoncard');
    var cardExpiry = document.getElementById('CardExpiry');
    var cardCVV = document.getElementById('CardCVV');

    var isValid = true; // Flag to track overall form validity
    var errorMessage = ''; // Store the error message

    // Validate each field individually
    if (firstName.value.trim() === '') {
      isValid = false;
      errorMessage += 'First name is missing.\n';
      highlightInvalidField(firstName);
    }
    if (lastName.value.trim() === '') {
      isValid = false;
      errorMessage += 'Last name is missing.\n';
      highlightInvalidField(lastName);
    }
    if (phone.value.trim() === '') {
      isValid = false;
      errorMessage += 'Phone number is missing.\n';
      highlightInvalidField(phone);
    } else if (!isValidPhoneNumber(phone.value.trim())) {
      isValid = false;
      errorMessage += 'Phone number is invalid. Please enter a 10-digit number.\n';
      highlightInvalidField(phone);
    }
    if (email.value.trim() === '') {
      isValid = false;
      errorMessage += 'Email address is missing.\n';
      highlightInvalidField(email);
    } else if (!isValidEmail(email.value.trim())) {
      isValid = false;
      errorMessage += 'Email address is invalid. Please enter a valid email address.\n';
      highlightInvalidField(email);
    }
    if (country.value.trim() === '') {
      isValid = false;
      errorMessage += 'Country is missing.\n';
      highlightInvalidField(country);
    }
    if (address.value.trim() === '') {
      isValid = false;
      errorMessage += 'Address is missing.\n';
      highlightInvalidField(address);
    }
    if (aptNumber.value.trim() === '') {
      isValid = false;
      errorMessage += 'Apartment number is missing.\n';
      highlightInvalidField(aptNumber);
    }
    if (city.value.trim() === '') {
      isValid = false;
      errorMessage += 'City is missing.\n';
      highlightInvalidField(city);
    }
    if (state.value.trim() === '') {
      isValid = false;
      errorMessage += 'State is missing.\n';
      highlightInvalidField(state);
    }
    if (zipcode.value.trim() === '') {
      isValid = false;
      errorMessage += 'ZIP code is missing.\n';
      highlightInvalidField(zipcode);
    } else if (!isValidZipCode(zipcode.value.trim())) {
      isValid = false;
      errorMessage += 'ZIP code is invalid. Please enter a 6-digit number.\n';
      highlightInvalidField(zipcode);
    }
    if (cardNumber.value.trim() === '') {
      isValid = false;
      errorMessage += 'Card number is missing.\n';
      highlightInvalidField(cardNumber);
    }
    if (cardName.value.trim() === '') {
      isValid = false;
      errorMessage += 'Name on card is missing.\n';
      highlightInvalidField(cardName);
    }
    if (cardExpiry.value.trim() === '') {
      isValid = false;
      errorMessage += 'Card expiry date is missing.\n';
      highlightInvalidField(cardExpiry);
    } else if (!isValidExpiryDate(cardExpiry.value.trim())) {
      isValid = false;
      errorMessage += 'Card expiry date is invalid. Please enter in MM/YYYY format.\n';
      highlightInvalidField(cardExpiry);
    }
    if (cardCVV.value.trim() === '') {
      isValid = false;
      errorMessage += 'CVV is missing.\n';
      highlightInvalidField(cardCVV);
    } else if (!isValidCVV(cardCVV.value.trim())) {
      isValid = false;
      errorMessage += 'CVV is invalid. Please enter a 3-digit number.\n';
      highlightInvalidField(cardCVV);
    }

    if (isValid) {
      alert('Payment successful. Redirecting to the homepage.');
    
    } else {
      // Show error message with specific error details
      alert('Please fix the following errors:\n' + errorMessage);
    }
  });

  // Function to highlight an invalid field
  function highlightInvalidField(field) {
    field.classList.add('invalid');
  }

  // Function to check if a phone number is valid
  function isValidPhoneNumber(phoneNumber) {
    // Validate for 10 digits
    return /^\d{10}$/.test(phoneNumber);
  }

  // Function to check if an email address is valid
  function isValidEmail(email) {
    // Validate using a simple regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Function to check if a ZIP code is valid
  function isValidZipCode(zipcode) {
    // Validate for 6 digits
    return /^\d{6}$/.test(zipcode);
  }

  // Function to check if a CVV number is valid
  function isValidCVV(cvv) {
    // Validate for 3 digits
    return /^\d{3}$/.test(cvv);
  }

  // Function to check if an expiry date is valid (MM/YYYY format)
  function isValidExpiryDate(date) {
    // Validate for MM/YYYY format
    return /^(0[1-9]|1[0-2])\/(20)\d{2}$/.test(date);
  }
var circleIcons = document.querySelectorAll('.circle-icon');
circleIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
});

});

