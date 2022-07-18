function getComputerChoice () {
const weapons = ['Rock', 'Paper', 'Scissors'];
  const number = Math.floor(Math.random() * weapons.length)
  const computerChoice = weapons[number]
  return computerChoice
}
  
function getPlayerChoice (){
  const playerChoice = prompt("Choose Your Weapon: Rock, Paper or Scissors?", "Rock").toUpperCase()
  return playerChoice
}

function playRound() {
  let playerChoice = getPlayerChoice()
  let computerChoice = getComputerChoice()

  switch (true) {
    case playerChoice == 'ROCK' && computerChoice == 'Paper':
      return 'You lose! Paper beats Rock';
      break;
    case playerChoice == 'PAPER' && computerChoice == 'Scissors':
      return 'You lose! Scissors beats Paper';
      break;
    case playerChoice == 'SCISSORS' && computerChoice == 'Rock':
      return 'You lose! Rock beats Scissors';
      break;
    case computerChoice == 'Scissors' && playerChoice == 'ROCK':
      return 'You Win! Rock beats Scissors';
      break;
    case computerChoice == 'Rock' && playerChoice == 'PAPER':
      return 'You Win! Paper beats Rock';
      break;
    case computerChoice == 'Paper' && playerChoice == 'SCISSORS':
      return 'You Win! Scissors beats Paper';
      break;
  }
}

// play()
