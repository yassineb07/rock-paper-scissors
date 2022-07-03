const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const comment = document.querySelector('.comment');

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

function playRound(playerSelection){
  computerSelection = computerSelect();
  console.log('player : '+playerSelection)
  console.log('computer : '+computerSelection)
  switch(playerSelection+' vs '+computerSelection){
    case 'rock vs scissors':
    case 'paper vs rock':
    case 'scissors vs paper':
      console.log('YOU WIN');
      playerScore++;
      pScore.textContent = `${playerScore}`;
      comment.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case 'rock vs paper':
    case 'paper vs scissors':
    case 'scissors vs rock':
      console.log('YOU LOSE');
      computerScore++;
      cScore.textContent = `${computerScore}`;
      comment.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      console.log('Tie');
      comment.textContent = 'It\'s a Tie';
  }
}


rock.addEventListener('click',function(){
  playRound('rock')
});

paper.addEventListener('click',function(){
  playRound('paper')
});

scissors.addEventListener('click',function(){
  playRound('scissors')
});


