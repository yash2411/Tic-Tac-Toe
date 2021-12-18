function openPlayerConfig(event)
{
    editedPlayer= +event.target.dataset.playerid;
    playerConfigOverlay.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig()
{
    playerConfigOverlay.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event)
{
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName=formData.get('playername').trim();

    if(!enteredPlayerName)
    {
        event.target.firstElementChild.classList.add('error')
        errorsOutputElement.textContent='Please Enter a Valid Name';
        return;
    }

    const updatePlayerElement=document.getElementById('player-'+editedPlayer+'-data');
    updatePlayerElement.children[1].textContent=enteredPlayerName;
    players[editedPlayer-1].name=enteredPlayerName;
    closePlayerConfig();
}