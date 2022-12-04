let guesses = document.querySelector('.previous__guesses');
let guessButton = document.querySelector('.guess__button');
let playButton = document.querySelector('.play__button');
let user_input = document.querySelector('.user_input')
let text = document.querySelector('.text')
let num_of_guess = document.querySelector('.num_of_guess')
let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100 +1);

guessButton.addEventListener('click', ()=>{

    let inputValue = Number(user_input.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${inputValue}    `;
    num_of_guess.textContent = guessCount++;
    if(inputValue === randomNumber){
      text.textContent = 'Congratulations! You got it right!';
    }
    else if (guessCount === 11 ){
      text.textContent = 'Game over';
      alert('you lose, click "OK" to play again!')
      location.reload()
    }
    else if(inputValue > randomNumber){
      text.textContent = 'Too high'
    }
    else if(inputValue < randomNumber){
      text.textContent = 'Too low'
    }
});

playButton.addEventListener('click', function(){
    location.reload()
})
