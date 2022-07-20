function getComputerChoice () {
const weapons = ['rock', 'paper', 'scissors'];
  const number = Math.floor(Math.random() * weapons.length)
  const computerChoice = weapons[number]
  return computerChoice
}
  
function getPlayerChoice (){
  const buttons = document.querySelectorAll('.btn');
  let result = document.querySelector('.result h4');
  let computerScore = 0;
  let playerScore = 0;

  
  buttons.forEach( btn => {
    btn.addEventListener('click', () => {
      let playerChoice = btn.id;
      let computerChoice = getComputerChoice()
      result.innerHTML = playRound(playerChoice, computerChoice)
    })
  })
}

function playRound(playerChoice, computerChoice) {

  switch (true) {
    case playerChoice === computerChoice:
      return 'Tie Game';
    case playerChoice == 'rock' && computerChoice == 'paper':
      return 'You lose! Paper beats Rock';
    case playerChoice == 'paper' && computerChoice == 'scissors':
      return 'You lose! Scissors beats Paper';
    case playerChoice == 'scissors' && computerChoice == 'rock':
      return 'You lose! Rock beats Scissors';
    case computerChoice == 'scissors' && playerChoice == 'rock':
      return 'You Win! Rock beats Scissors';
    case computerChoice == 'rock' && playerChoice == 'paper':
      return 'You Win! Paper beats Rock';
    case computerChoice == 'paper' && playerChoice == 'scissors':
      return 'You Win! Scissors beats Paper';
  }
}

function game() {
  getPlayerChoice()
}

game()