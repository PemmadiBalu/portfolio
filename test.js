document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const name = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const message = document.querySelector('textarea').value;

      // Simple form validation
      if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields.');
          return;
      }

      // Display success message
      alert('Thank you for your message, ' + name + '! We will get back to you soon.');

      // Optionally, you can clear the form after submission
      document.getElementById('contactForm').reset();
  });
});

