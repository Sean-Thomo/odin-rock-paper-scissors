function getComputerChoice () {
const weapons = ['rock', 'paper', 'scissors'];
  const number = Math.floor(Math.random() * weapons.length)
  const computerChoice = weapons[number]
  return computerChoice
}
  
function getPlayerChoice (){
  // const playerChoice = prompt("Choose Your Weapon: Rock, Paper or Scissors?", "Rock").toLowerCase()
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach( btn => {
    let playerChoice = btn.id
    btn.addEventListener('click', playRound())
  })
  return playerChoice
}

function playRound() {
  let playerChoice = getPlayerChoice()
  let computerChoice = getComputerChoice()

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
  for (let i = 0; i< 5; i++){
    console.log(playRound())
  }
}

// game()