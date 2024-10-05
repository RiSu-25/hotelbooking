// Room rates
const rates = {
    "Standard Room": 8500,
    "Delux Room": 12500,
    "Royal Suite": 18500
};

// Update room rate on selection
document.getElementById('roomType').addEventListener('change', function() {
    const numRooms = this.value;
    const rate = rates[numRooms];
    const nights = calculateNights();
    const totalCost = rate * nights;
    document.getElementById('roomRate').innerText = `Total Rate: $${totalCost} for ${nights} night(s)`;
});

function calculateNights() {
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const timeDiff = checkout - checkin;
    return Math.max(1, timeDiff / (1000 * 3600 * 24)); // Calculate nights
}


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;
    const payment = document.getElementById('payment').value;

    const nights = calculateNights();
    const rate = rates[roomType];
    const totalCost = rate * nights;

    // Validate dates
    if (new Date(checkout) <= new Date(checkin)) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    // Create output HTML
    const bookingData = `<p class="fname"><b>First Name: </b>${fname}</p>
    <p class="lname"><b>Last Name: </b>${lname}</p>
    <p><b>Email: </b>${email}</p>
    <p class="checkin"><b>Check In: </b>${checkin}</p>
    <p class="checkout"><b>Check Out: </b>${checkout}</p>
    <p><b>RoomType: </b>${roomType}</p>
    <p><b>Payment: </b>${payment}</p>
    <p><b>Total Rate: </b>${totalCost}</p>
    `;

    // Display it in html for confirmation
    document.getElementById('bookingData').innerHTML = bookingData;
    
    // Reset the form after confirmation
    document.getElementById('bookingForm').reset();
    document.getElementById('roomRate').innerText = ''; // Clear room rate
});

 


    
  