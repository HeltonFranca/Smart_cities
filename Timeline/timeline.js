
const saibaMaisButton = document.createElement('button');
saibaMaisButton.textContent = 'Expandir/retrair linha do tempo'; 
saibaMaisButton.classList.add('botao');

document.body.appendChild(saibaMaisButton);

const events = document.querySelectorAll('.event');

saibaMaisButton.addEventListener('click', () => {
    events.forEach(event => {
        const eventDescription = event.querySelector('.descricao');

        if (eventDescription.style.display === 'block') {
            eventDescription.style.display = 'none';
        } else {
            eventDescription.style.display = 'block';
        }
    });
});
