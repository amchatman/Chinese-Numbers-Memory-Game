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
const chineseNumbers = ['一','一','二','二','三','三','四','四',
                        '五','五','六','六','七','七','八','八',
                        '九','九','十','十'];

/*Calls shuffleCards (array);
const cardShuffle = shuffleCards(chineseNumbers);
*/

//Creates a reference to the bord-container element
const gameBoard = document.querySelector('#gameContainer');

for(let i = 0; i < chineseNumbers.length; i++){
    const flip = document.createElement('div');
    flip.classList.add('flip');

    const card = document.createElement('div');
    card.classList.add('card');
    flip.appendChild(card);
    //Front Card Starts Here
    const front = document.createElement('div');
    front.classList.add('front');

    const p = document.createElement('p');
    p.textContent = "Front";
    front.appendChild(p);

    card.appendChild(front);
    //Back Card Starts Here
    const back = document.createElement('div');
    back.classList.add('back');

    const p2 = document.createElement('p');
    p2.textContent = "Back";
    back.appendChild(p2);

    card.appendChild(back);
    
    gameBoard.appendChild(flip);
}


/*Loops through the characters
for(let i = 0; i < chineseNumbers.length; i++){
    //Creates a div for each element Character
    const card = document.createElement('div');
    card.classList.add('card');
    gameBoard.appendChild(card);
    //Print index of cards in index.html
    card.innerHTML = chineseNumbers[i]; 
}
*/
/*Shuffle Cards
function shuffleCards(array){
    for(let i = array.length -1; i > 0; i--){
        const randomize = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomize]] = [array[randomize], array[i]];
    }
    return array;
}
*/

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