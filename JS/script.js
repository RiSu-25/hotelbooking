document.getElementById('rateForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const checkin = new Date(document.getElementById('checkin').value);
  const checkout = new Date(document.getElementById('checkout').value);
  const roomType = document.getElementById('roomType').value;

  
  // Calculate the number of nights
  const timeDiff = checkout - checkin;
  const nights = timeDiff / (1000 * 3600 * 24);

  // Room rate per night
  const rates = {
      single: 8500,
      double: 12500,
      suite: 18500
  };
  
  // Calculate total cost
  const totalCost = rates[roomType] * nights;

  // Create result summary
  const resultContent = `
      <h3>Rate Summary</h3>
      <p><strong>Check-in Date:</strong> ${checkin.toDateString()}</p>
      <p><strong>Check-out Date:</strong> ${checkout.toDateString()}</p>
      <p><strong>Room Type:</strong> ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}</p>
      <p><strong>Total Nights:</strong> ${nights} night(s)</p>
      <p><strong>Total Cost:</strong> $${totalCost.toFixed(2)}</p>
  `;

  // Display result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = resultContent;
  resultDiv.style.display = 'block';

  // Optionally reset the form
  this.reset();
});