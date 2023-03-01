/**Create a board with 20 blocks
**Create two of each number to store in cards
**Each chiniese character must match each outher
**Once all cards our match send an congraulation message
**Reset game on button or refresh

// console.log(chineseNumbers[0] === chineseNumbers[5]);
Find a way to get the the index of the arrays in a if statement
*/

//Global variables
const chineseNumbers = ['一','一','二','二','三','三','四','四',
                        '五','五','六','六','七','七','八','八',
                        '九','九','十','十'];

const shuffleCards = shuffleNumbers(chineseNumbers);

//Two items will be store here  [0] and [1] these are the comparision
const chosenCards = [];


//Creates a reference to the bord-container element
const gameBoard = document.querySelector('#gameContainer');
/***************************************/

//Function to create the gameBorard
function createBoard(){
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
}
createBoard();
//Function shuffle chineseNumbers
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
