document.getElementById('email').addEventListener('input', function () {
    var emailInput = document.getElementById('email');
    if (!emailInput.checkValidity()) {
      emailInput.setCustomValidity('Please enter a valid email address');
    } else {
      emailInput.setCustomValidity('');
    }
  });
  
  document.getElementById('Card').addEventListener('input', function () {
    var cardInput = document.getElementById('Card');
    if (cardInput.value.length !== 12 || isNaN(cardInput.value)) {
      cardInput.setCustomValidity('Please enter a valid 12-digit card number');
    } else {
      cardInput.setCustomValidity('');
    }
  });
  
  document.getElementById('CardExpiry').addEventListener('input', function () {
    var expiryInput = document.getElementById('CardExpiry');
    var pattern = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (!pattern.test(expiryInput.value)) {
      expiryInput.setCustomValidity('Please enter a valid expiry date (MM/YYYY)');
    } else {
      expiryInput.setCustomValidity('');
    }
  });
  
  document.getElementById('CardCVV').addEventListener('input', function () {
    var cvvInput = document.getElementById('CardCVV');
    if (cvvInput.value.length !== 3 || isNaN(cvvInput.value)) {
      cvvInput.setCustomValidity('Please enter a valid 3-digit CVV');
    } else {
      cvvInput.setCustomValidity('');
    }
  });

  document.getElementById('zipcode').addEventListener('input', function () {
    var zipInput = document.getElementById('zipcode');
    if (zipInput.value.length !== 6 || isNaN(zipInput.value)) {
      zipInput.setCustomValidity('Please enter a valid 6-digit zip code');
    } else {
      zipInput.setCustomValidity('');
    }
  });
  var countryInput = document.getElementById('country');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var stateInput = document.getElementById('state');
var zipcodeInput = document.getElementById('zipcode');

countryInput.setAttribute('required', 'required');
addressInput.setAttribute('required', 'required');
cityInput.setAttribute('required', 'required');
stateInput.setAttribute('required', 'required');
zipcodeInput.setAttribute('required', 'required');
var firstNameInput = document.getElementById('first-name');
var lastNameInput = document.getElementById('last-name');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var cardNumberInput = document.getElementById('Card');
var nameOnCardInput = document.getElementById('Nameoncard');
var expiryInput = document.getElementById('CardExpiry');
var cvvInput = document.getElementById('CardCVV');

firstNameInput.setAttribute('required', 'required');
lastNameInput.setAttribute('required', 'required');
phoneInput.setAttribute('required', 'required');
emailInput.setAttribute('required', 'required');
cardNumberInput.setAttribute('required', 'required');
nameOnCardInput.setAttribute('required', 'required');
expiryInput.setAttribute('required', 'required');
cvvInput.setAttribute('required', 'required');

var payNowButton = document.getElementById('pay-now-btn');

payNowButton.addEventListener('click', function(event) {
  event.preventDefault();

  var isValid = validateForm(); 

  if (isValid) {
    var successMessage = document.createElement('div');
    successMessage.textContent = 'Thanks for payment!';
    successMessage.classList.add('success-message');
    document.body.appendChild(successMessage);

    document.getElementById('payment-form').reset();
  }
});

function validateForm() {

  var cardNumberInput = document.getElementById('Card');
  var expiryInput = document.getElementById('CardExpiry');
  var cvvInput = document.getElementById('CardCVV');
  
  if (cardNumberInput.value.length !== 12 || isNaN(cardNumberInput.value)) {
    alert('Please enter a valid 12-digit card number.');
    return false;
  }
  
  if (!expiryInput.value.match(/^\d{2}\/\d{4}$/)) {
    alert('Please enter a valid expiration date (MM/YYYY).');
    return false;
  }
  
  if (cvvInput.value.length !== 3 || isNaN(cvvInput.value)) {
    alert('Please enter a valid 3-digit CVV.');
    return false;
  }

  return true;
}
