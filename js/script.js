function getComputerChoice () {
  weapons = ['Rock', 'Paper', 'Scissors'];

  number = Math.floor(Math.random() * weapons.length)
  return weapons[number]
}

getComputerChoice()