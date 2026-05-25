// Creating mock data file first
// We will fetch events.json

const list = document.getElementById('list');
const spinner = document.getElementById('spinner');

// Method 1: Promises
/*
fetch('events.json')
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
*/

// Method 2: Async/Await
async function loadEvents() {
    spinner.style.display = 'block';
    try {
        const resp = await fetch('events.json');
        const data = await resp.json();
        data.forEach(d => {
            const li = document.createElement('li');
            li.textContent = d.name;
            list.appendChild(li);
        });
    } catch(err) {
        console.error('Fetch error:', err);
    } finally {
        spinner.style.display = 'none';
    }
}
loadEvents();
