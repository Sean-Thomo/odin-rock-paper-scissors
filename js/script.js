function getComputerChoice () {
const weapons = ['rock', 'paper', 'scissors'];
  const number = Math.floor(Math.random() * weapons.length)
  const computerChoice = weapons[number]
  return computerChoice
}
  
function getPlayerChoice (){
  const playerChoice = prompt("Choose Your Weapon: Rock, Paper or Scissors?", "Rock").toLowerCase()
  return playerChoice
}

function playRound() {
  let playerChoice = getPlayerChoice()
  let computerChoice = getComputerChoice()

  switch (true) {
    case playerChoice === computerChoice:
      return 'Tie Game';
      break;
    case playerChoice == 'rock' && computerChoice == 'paper':
      return 'You lose! Paper beats Rock';
      break;
    case playerChoice == 'paper' && computerChoice == 'scissors':
      return 'You lose! Scissors beats Paper';
      break;
    case playerChoice == 'scissors' && computerChoice == 'rock':
      return 'You lose! Rock beats Scissors';
      break;
    case computerChoice == 'scissors' && playerChoice == 'rock':
      return 'You Win! Rock beats Scissors';
      break;
    case computerChoice == 'rock' && playerChoice == 'paper':
      return 'You Win! Paper beats Rock';
      break;
    case computerChoice == 'paper' && playerChoice == 'scissors':
      return 'You Win! Scissors beats Paper';
      break;
  }
}

function game() {
  for (let i = 0; i< 5; i++){
    console.log(playRound())
  }
}

// game()
const log = () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(btn.id);
    })
  })
}

log()