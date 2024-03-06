const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper"|| userInput ==="scissors" ) {
    return userInput;
  } 
  else if(userInput="bomb") {
    console.log('you won!!!!');
  }
  else{
    console.log('error happened')
  }
};
var input = getUserChoice("paper");
console.log(input);
//console.log(getUserChoice('Paper'));

// COMPUTER MAKE A CHOICE
const getComputerChoice = () =>{
  const random = Math.floor(Math.random() * 3);
  if (random === 0){
      return 'paper';
  } else if (random === 1){
      return 'rock';
  } else if (random === 2){
      return 'scissors';
  } else {
      return 'computer error';
  }
};
// testing computer choice
const rdm = getComputerChoice('rock');
console.log(rdm);

const determineWinner = (userChoice , computerChoice) =>{
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'user  won!';
        } else {
          return ' computer  won!';
        }
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
          return 'The user  won!';
        } else {
          return 'computer You won!';
        }
      }
      if (userChoice === 'scissors'){
        if (computerChoice === 'paper'){
            return 'user  won!';
        } else {
            return ' computer won';
        }
    }
    if (userChoice === 'bomb'){
      if (computerChoice === 'rock'){
          return 'YOU WON!';
      } else {
          return 'YOU WON!';
      }
  }
      
};
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock')); 


// function to play a game


const playGame = () => {
    const userChoice=getUserChoice('scissors');
    const computerChoice=getComputerChoice('paper');
    console.log( "the user choosed: " + userChoice);
    console.log("the computer choosed: " + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
};
playGame();