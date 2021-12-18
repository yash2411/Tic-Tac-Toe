const playerConfigOverlay=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop')

let editedPlayer=0;

const players=[
    {name: '', symbol: 'X'},
    {name: '', symbol: 'O'}
]

const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');

const cancelBtnElement=document.getElementById('cancel-btn');

const formElement=document.querySelector('form');
const errorsOutputElement=document.getElementById('config-errors')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
