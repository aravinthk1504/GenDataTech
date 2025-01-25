// Smooth scroll for anchor links
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
})();



document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const service = document.getElementById('service');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  let valid = true;

  // Validate service selection
  if (service.value === '') {
      showError(service, 'Please select a service');
      valid = false;
  } else {
      clearError(service);
  }

  // Validate name
  if (name.value.trim() === '') {
      showError(name, 'Name is required');
      valid = false;
  } else {
      clearError(name);
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
      showError(email, 'Valid email is required');
      valid = false;
  } else {
      clearError(email);
  }

  // Validate message
  if (message.value.trim() === '') {
      showError(message, 'Message cannot be empty');
      valid = false;
  } else {
      clearError(message);
  }

  if (valid) {
      alert('Form submitted successfully!');
      // Add form submission logic (e.g., send data to server)
      service.value = '';
      name.value = '';
      email.value = '';
      message.value = '';
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  input.style.borderColor = '#d9534f';
}

function clearError(input) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.style.display = 'none';
  input.style.borderColor = '#ccc';
}




