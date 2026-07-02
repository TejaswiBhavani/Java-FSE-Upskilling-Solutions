document.getElementById('postBtn').addEventListener('click', () => {
    const status = document.getElementById('status');
    status.innerText = 'Sending...';

    const payload = { name: 'John', event: 'Art' };

    setTimeout(() => {
        // Mocking POST request to a free placeholder API
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            status.innerText = 'Success! ID recorded: ' + data.id;
        })
        .catch(err => {
            status.innerText = 'Failure!';
            console.error(err);
        });
    }, 1500); // 1.5s delay simulation
});
