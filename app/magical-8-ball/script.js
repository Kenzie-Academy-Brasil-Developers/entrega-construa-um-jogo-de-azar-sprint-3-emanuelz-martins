const questionInput = document.querySelector('#question-input');
const answerButton = document.querySelector('#button-response');
const playAgainButton = document.querySelector('#play-again');
const emptyDiv = document.querySelector('#response');
const responses = [
    'yes', 'no',
];

const randomValue = () => Math.floor(Math.random() * responses.length);

const getAnswer = () => {
    switch (randomValue()) {
        case 0:
            return response(responses[0]);
            break;
        case 1:
            return response(responses[1]);
            break;
        default:
            break;
    }
}

const response = (index) => {
    const img = document.createElement('img');
    img.className = 'animate-gif';            
    img.src = `/assets/gifs/${index}.gif`;
    emptyDiv.appendChild(img);
}

answerButton.addEventListener('click', () => {
    getAnswer();
    questionInput.classList.add('hidden');
    answerButton.classList.add('hidden');
    playAgainButton.setAttribute('class', 'show');
});

playAgainButton.addEventListener('click', () => {
    window.location.reload(true);
});
