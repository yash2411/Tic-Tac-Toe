const playerConfigOverlay=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop')

let editedPlayer=0;

const players=[
    {name: '', symbol: 'X'},
    {name: '', symbol: 'O'}
]

const editPlayer1BtnElement = document.getElementById('edit-player1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player2-btn');

const startBtn=document.getElementById('start-btn');

const cancelBtnElement=document.getElementById('cancel-btn');

const gameElement=document.getElementById('active-game');

let activePlayerName=document.getElementById('active-player-name');

const gameBoardElement=document.getElementById('game-board')

let activePlayer=0;
let gameIsOver=false;

const gameOverEle=document.getElementById('game-over')

const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let currentRound=1;

const formElement=document.querySelector('form');
const errorsOutputElement=document.getElementById('config-errors')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

// const gameFieldElements=document.querySelectorAll('#game-board');

cancelBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startBtn.addEventListener('click', startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField)
// }

gameBoardElement.addEventListener('click', selectGameField)