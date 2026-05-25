const events = [
    { name: 'Past Event', status: 'past', seats: 10 },
    { name: 'Full Event', status: 'upcoming', seats: 0 },
    { name: 'Available Event', status: 'upcoming', seats: 5 }
];

const list = document.getElementById('eventList');
events.forEach(e => {
    // Hide past or full
    if (e.status === 'upcoming' && e.seats > 0) {
        const li = document.createElement('li');
        li.innerText = e.name;
        list.appendChild(li);
    }
});

function register() {
    try {
        let user = null;
        // Intentionally causing error to test catch
        if(!user) throw new Error('User not logged in!');
    } catch(err) {
        console.error('Registration failed: ', err.message);
        alert('Registration failed: ' + err.message);
    }
}
