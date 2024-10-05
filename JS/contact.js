
//Contact Us 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact_form');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === '' || email === '' || subject === '' || message === '') {
            responseMessage.textContent = 'All fields are required!';
            responseMessage.style.color = 'red';
            return;
        }

        // For demonstration purposes, let's just log the values and show a success message
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Simulate form submission
        responseMessage.textContent = 'Thank you for your message. We will get back to you soon!';
        responseMessage.style.color = 'orange';

        // Optionally, clear the form fields
        form.reset();
    });
});



