const log = document.getElementById('log');
document.getElementById('regBtn').onclick = () => { log.innerText += 'Registered!\n'; };
document.getElementById('catFilter').onchange = (e) => { log.innerText += 'Filter changed to: ' + e.target.value + '\n'; };
document.getElementById('searchInput').onkeydown = (e) => { log.innerText += 'Search typed: ' + e.key + '\n'; };
