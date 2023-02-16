/*Create a board with 20 blocks
Store 10 blocks with Chinenes numbers
The other 10 have the romanization pinyin
Each card must match  the chinese number with the 
romaization.
If cards match add point if cards dont match reflip card
When all card been match message congulation and reset
On Reset rerange cards and play again.
*/

//Create a array to store characters
const chineseNumbers = ['一','二','三','四','五','六','七','八','九','十'];
const chinesePinyin =['yì','èr','sān','sì','wǔ','liù','qī','bā,','jiǔ','shí'];

//Creates a reference to the bord-container element
const gameBoard = document.querySelector('#gameContainer');

//Loops through the characters
for(let i = 0; i < chineseNumbers.length; i++){
    //Creates a div for each element Character
    const card = document.createElement('div');
    card.classList.add('card');
    gameBoard.appendChild(card);
    card.innerHTML = chineseNumbers[i];
}
for(let j = 0; j < chinesePinyin.length; j++){
    const card = document.createElement('div');
    card.classList.add('card');
    gameBoard.appendChild(card);
    card.innerHTML = chinesePinyin[j];
}

//Prefer color theme settings
const themeSettings = evt => {
    const body = document.body
    const theme = evt.currentTarget.selectedOptions[0].value

    switch (theme){
        case 'light':
            body.setAttribute('data-theme', 'light');
            break;
        case 'dark':
            body.setAttribute('data-theme','dark');
            break;
        case 'newYear':
            body.setAttribute('data-theme','newyear');
            break;
        case 'default':
            body.setAttribute('data-theme', 'default');
            break;
    }
}
const toggleTheme = document.getElementById('theme-toggle')

toggleTheme.addEventListener('change', themeSettings)