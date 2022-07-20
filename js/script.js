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
      let computerChoice = getComputerChoice()
      result.innerHTML = playRound(playerChoice, computerChoice)
    })
  })
}

function playRound(playerChoice, computerChoice) {
  let computerScore = 0;
  let playerScore = 0;

  while (computerScore < 5 || playerScore < 5){
    switch (true) {
      case playerChoice === computerChoice:
        computerScore += 0;
        playerScore += 0;
        return 'Tie Game';
      case playerChoice == 'rock' && computerChoice == 'paper':
        computerScore ++;
        return 'You lose! Paper beats Rock';
      case playerChoice == 'paper' && computerChoice == 'scissors':
        computerScore ++;
        return 'You lose! Scissors beats Paper';
      case playerChoice == 'scissors' && computerChoice == 'rock':
        computerScore ++;
        return 'You lose! Rock beats Scissors';
      case computerChoice == 'scissors' && playerChoice == 'rock':
        playerScore ++;
        return 'You Win! Rock beats Scissors';
      case computerChoice == 'rock' && playerChoice == 'paper':
        playerScore ++;
        return 'You Win! Paper beats Rock';
      case computerChoice == 'paper' && playerChoice == 'scissors':
        playerScore ++;
        return 'You Win! Scissors beats Paper';
    }
  }

  if (playerScore > computerScore) {
    return 'We WON! We\'ll witness a few more trips around the sun'
  } else {
    return 'We LOST! No more listening to Kendrick and playing video games'
  }

}

function game() {
  getPlayerChoice()
}

game()