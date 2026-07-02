const eventName = "Community Picnic";
const eventDate = "2026-08-15";
let availableSeats = 50;

function displayEvent() {
    document.getElementById('output').innerText = "${eventName}" on  + eventDate +  - Seats:  + availableSeats;
}

function bookSeat() {
    if (availableSeats > 0) {
        availableSeats--; // operator
        displayEvent();
    }
}
displayEvent();
