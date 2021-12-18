function resetGameStatus()
{
    activePlayer=0;
    currentRound=1;
    gameIsOver=false;
    gameOverEle.firstElementChild.innerHTML='You Won <span id="winner-name">PLAYERNAME</span>!'
    gameOverEle.style.display='none';
    let gameBoardIndex=0;
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            gameData[i][j]=0;
            gameBoardElement.children[gameBoardIndex].textContent=''
            gameBoardElement.children[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame()
{
   if(players[0].name=='' || players[1].name=='')
   {
       alert('Please add player name');
       return;
   }
   resetGameStatus();
   activePlayerName.textContent=players[activePlayer].name;
   gameElement.style.display='block';

}



function switchPlayer()
{
    if(activePlayer===0)
    {
        activePlayer=1;
    }
    else
    {
        activePlayer=0
    }
    activePlayerName.textContent=players[activePlayer].name;
}

function selectGameField(event)
{
    // console.log(event.target.tagName)
    if(event.target.tagName!=='LI' || gameIsOver)
    {
        return;
    }

    const selectedColumn=event.target.dataset.col-1;
    const selectedRow=event.target.dataset.row-1;

    if(gameData[selectedRow][selectedColumn])
    {
        alert('Select another field')
        return
    }

    event.target.textContent=players[activePlayer].symbol
    event.target.classList.add('disabled');

    gameData[selectedRow][selectedColumn]=activePlayer+1;
    const winnerId=checkGameOver();
    if(winnerId!==0)
    {
        endGame(winnerId)
    }

    currentRound++;
    switchPlayer();
   
}

function checkGameOver()
{
    for(let i=0; i<3; i++)
    {
        if(gameData[i][0]>0 && gameData[i][0]===gameData[i][1] && gameData[i][1]===gameData[i][2])
        {
            return gameData[0][0];
        }
    }
    for(let j=0; j<3; j++)
    {
        if(gameData[0][j]>0 && gameData[0][j]===gameData[1][j] && gameData[1][j]===gameData[2][j])
        {
            return gameData[0][0];
        }
    }
    if(gameData[0][0]>0 && gameData[0][0]===gameData[1][1] && gameData[1][1]===gameData[2][2])
    {
        return gameData[0][0];
    }
    if(gameData[2][0]>0 && gameData[2][0]===gameData[1][1] && gameData[1][1]===gameData[0][2])
    {
        return gameData[0][0];
    }
    if(currentRound===9)
    {
       return -1; 
    }
    return 0;
}

function endGame(winnerId)
{
    gameIsOver=true;
    if(winnerId>0)
    {
        const winnerName=players[winnerId-1].name;
        gameOverEle.children[0].children[0].textContent=winnerName;
    }
    else
    {
        gameOverEle.firstElementChild.textContent='It\'s a draw!';
    }
    gameOverEle.style.display='block';
    
}