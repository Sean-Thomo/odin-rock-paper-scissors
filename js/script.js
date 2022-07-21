let computerScore = 0;
let playerScore = 0;

function getComputerChoice () {
  const weapons = ['rock', 'paper', 'scissors'];
  const number = Math.floor(Math.random() * weapons.length)
  const computerChoice = weapons[number]
  return computerChoice
}
  
function getPlayerChoice (){
  const buttons = document.querySelectorAll('.btn');
  let result = document.querySelector('.result');

  // Call playRound() whenever a button is clicked
  buttons.forEach( btn => {
    btn.addEventListener('click', () => {
      let playerChoice = btn.id;
      let computerChoice = getComputerChoice();
      result.innerHTML = playRound(playerChoice, computerChoice);
      
      if (playerScore === 5 || computerScore ===5){
        pickWinner();
        
        setTimeout(function () {
          resetGame();
        }, 1000);
      }
    })
  })

}

function playRound(playerChoice, computerChoice) {
  while (computerScore < 5 || playerScore < 5){
    switch (true) {
      case playerChoice === computerChoice:
        return 'Tie Game';
      case playerChoice == 'rock' && computerChoice == 'paper':
        computerScore ++;
        displayComputerScore()
        return 'You lose! Paper beats Rock';
      case playerChoice == 'paper' && computerChoice == 'scissors':
        computerScore ++;
        displayComputerScore()
        return 'You lose! Scissors beats Paper';
      case playerChoice == 'scissors' && computerChoice == 'rock':
        computerScore ++;
        displayComputerScore()
        return 'You lose! Rock beats Scissors';
      case computerChoice == 'scissors' && playerChoice == 'rock':
        playerScore ++;
        displayPlayerScore()
        return 'You Win! Rock beats Scissors';
      case computerChoice == 'rock' && playerChoice == 'paper':
        playerScore ++;
        displayPlayerScore()
        return 'You Win! Paper beats Rock';
      case computerChoice == 'paper' && playerChoice == 'scissors':
        playerScore ++;
        displayPlayerScore()
        return 'You Win! Scissors beats Paper';
    }
  }

}

function pickWinner(){
  let result = document.querySelector('.result')

  if (playerScore > computerScore) {
    result.innerHTML = 'We WON! We\'ll witness a few more trips around the sun'
  } else {
    result.innerHTML = 'We LOST! No more listening to Kendrick and playing video games'
  }
}

function resetGame() {
  playerScore= 0;
  computerScore =0;
  displayComputerScore()
  displayPlayerScore()
}

function displayPlayerScore(){
  let playerDisplay = document.querySelector('#playerScore');
  playerDisplay.innerHTML = playerScore;
}

function displayComputerScore(){
  let computerDisplay = document.querySelector('#computerScore');
  computerDisplay.innerHTML = computerScore;
}

function game() {
  getPlayerChoice()
}

game()