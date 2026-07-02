const container = document.querySelector('#eventContainer');
const btn = document.querySelector('#addBtn');

function renderEvent(name) {
    const card = document.createElement('div');
    card.style.border = '1px solid black';
    card.innerText = name;
    container.appendChild(card);
}

btn.addEventListener('click', () => {
    renderEvent('New Registration Added');
});
renderEvent('Initial Event Card');
