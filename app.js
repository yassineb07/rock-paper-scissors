
function computerSelect(){
  let selection = Math.floor(Math.random() * 3);
  switch (selection){
    case 0 :
      return 'rock'
    case 1 :
      return 'paper'
    case 2 :
      return 'scissors'
  }
};
const comment = document.querySelector('.comment');

function playRound(computer,player){
  /* const comment = document.querySelector('.comment'); */
  
  if (computer === player) {
    comment.textContent = 'Tie Game'
    return 'tie'
  };
  switch (player){
    case 'rock':
      if (computer === 'paper') {
        comment.textContent = 'You Lose! Paper beats Rock'
        return 'lost'
      } else {
        comment.textContent = 'You Win! Rock beats Scissors'
        return 'win'
      };
    
    case 'paper':
      if (computer === 'scissors') {
        comment.textContent = 'You Lose! Scissors beats Paper'
        return 'lost'
      } else {
        comment.textContent = 'You Win! Paper beats Rock'
        return 'win'
      };
    
    case 'scissors':
      if (computer === 'rock') {
        comment.textContent = 'You Lose! Rock beats Scissors'
        return 'lost'
      } else {
        comment.textContent = 'You Win! Scissors beats Paper'
        return 'win'
      };
  };
};

let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore')

pScore.textContent = '0';
cScore.textContent = '0';

function getScore(game){

  if (game === 'win') {
    playerScore++;
    pScore.textContent = `${playerScore}`
  }
  if (game === 'lost') {
    computerScore++
    cScore.textContent = `${computerScore}`
  }
};

function isGameOver(){
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore){
      comment.textContent = 'You Won The Game'
      return true
    } else {
      comment.textContent = 'You Lost The Game'
      return true
    }
  }};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click',function(){
  if(isGameOver()) return;
  let selection = rock.getAttribute('id');
  console.log(selection);
  let game = playRound(computerSelect(),selection);
  getScore(game);
});

paper.addEventListener('click',function(){
  if(isGameOver()) return;
  let selection = paper.getAttribute('id');
  console.log(selection);
  let game = playRound(computerSelect(),selection);
  getScore(game);
});

scissors.addEventListener('click',function(){
  if(isGameOver()) return;
  let selection = scissors.getAttribute('id');
  console.log(selection);
  let game = playRound(computerSelect(),selection);
  getScore(game);
});











