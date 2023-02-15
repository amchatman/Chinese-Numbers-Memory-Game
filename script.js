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


//Check for card match
function checkMatch(card1,card2){
    const num1 = chineseNumbers.indexOf(card1.textContent);
    const num2 = chineseNumbers.indexOf(card2.textContent);

    if(chinesePinyin[num1]=== card1.textContent){
        return true;
    }
    if(chinesePinyin[num2]=== card2.textContent) {
        return true;
    }   
    else{
        return false;
    }
}
