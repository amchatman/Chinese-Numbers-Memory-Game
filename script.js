/*Create a board with 20 blocks
Store 10 blocks with Chinenes numbers
The other 10 have the romanization pinyin
Each card must match  the chinese number with the 
romaization.
If cards match add point if cards dont match reflip card
When all card been match message congulation and reset
On Reset rerange cards and play again.

// console.log(chineseNumbers[0] === chineseNumbers[5]);
Find a way to get the the index of the arrays in a if statement
*/

//Create a array to store characters
const chineseNumbers = ['一','一','二','二','三','三','四','四',
                        '五','五','六','六','七','七','八','八',
                        '九','九','十','十'];


//Call function shuffleNumbers
const shuffleCards = shuffleNumbers(chineseNumbers);

//Creates a reference to the bord-container element
const gameBoard = document.querySelector('#gameContainer');

//Loop throught the chineseNumbers array 
for(let i = 0; i < chineseNumbers.length; i++){
    const flip = document.createElement('div');
    flip.classList.add('flip');

    const card = document.createElement('div');
    card.classList.add('card');
    flip.appendChild(card);
    //Front Card Starts Here
    const front = document.createElement('div');
    front.classList.add('front');

    card.appendChild(front);

    //Back Card Starts Here
    const back = document.createElement('div');
    back.classList.add('back');

    back.innerHTML = chineseNumbers[i];
    card.appendChild(back);
    
    gameBoard.appendChild(flip);
}
//Shuffle chineseNumbers
function shuffleNumbers(arr){
    for(let k = arr.length -1; k > 0; k--){
        const random = Math.floor(Math.random() * (k + 1));
        [arr[k],arr[random]] = [arr[random],arr[k]];
    }
    return arr;
}
//Card Flip Section
const flipCard = document.querySelectorAll(".card");

for(let j = 0; j < flipCard.length; j++){
    flipCard[j].addEventListener("click", function(){
        flipCard[j].classList.toggle("cardFlip");
    })
}
//Card Match

console.log('Hello');
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
