// GAME FUNCTION:
// - Player must guess a number between min and max 
// - Player gets a certain amount of guesses
// - Notify player of remaining guesses
// - Notify player of the correct answer if they lose 
// - Let player choose to play again

// Game Values
let min = 1,
   max = 10,
   winningNum = 2,
   guessesLeft = 3; 

// UI Elements
const game = document.querySelector('#game'),
   minNum = document.querySelector('.min-num'),
   maxNum = document.querySelector('.max-num'),
   guessBtn = document.querySelector('#guess-btn'),
   guessInput = document.querySelector('#guess-input'),
   message = document.querySelector('.message');  

// assign UI min and max
minNum.textContent = min; 
maxNum.textContent = max; 

// listen for guess
guessBtn.addEventListener('click', () => {
   let guess = parseInt(guessInput.value); 

   // Validate
   if(isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
   }

   // check if won
   if (guess === winningNum) {

      gameOver(true, `${winningNum} is correct! You win!`)   

   } else {
      // wrong number
      guessesLeft -= 1; 
      // check if there are any guesses left
      if (guessesLeft === 0) {
         // game over - lost
         gameOver(false, `Game over...you lost. The correct number was ${winningNum}.`)

      } else {
         // game continues - answer wrong
         guessInput.style.borderColor = 'red';
         setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`); 
         // clear input
         guessInput.value = ''; 
      }
   }
});

// game over
gameOver = (won, msg) => {
   let color;
   won === true ? color = 'green' : color = 'red';

   // disable input
   guessInput.disabled = true;
   // change border color
   guessInput.style.borderColor = color;
   // set text color
   message.style.color = color; 
   // set message 
   setMessage(msg);
}; 

// set message
setMessage = (msg, color) => {
   message.style.color = color;
   message.textContent = msg; 
}