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
  switch(playerSelection+' vs '+computerSelection){
    case 'rock vs scissors':
    case 'paper vs rock':
    case 'scissors vs paper':
      playerScore++;
      pScore.textContent = `${playerScore}`;
      if (playerScore < 5){
        comment.textContent = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
      } else if (playerScore === 5) {
        comment.textContent = 'Game Over, You Win! Refresh to Play Again';
        gameOver()
      };
      break;
    case 'rock vs paper':
    case 'paper vs scissors':
    case 'scissors vs rock':
      computerScore++;
      cScore.textContent = `${computerScore}`;
      if (computerScore < 5){
        comment.textContent = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
      } else if (computerScore === 5) {
        comment.textContent = 'Game Over, You Lose! Refresh to Play Again';
        gameOver();
      };
      break;
    default:
      comment.textContent = 'It\'s a Tie';
  }
}

function gameOver(){
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
 function restartGame(){
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  comment.textContent = '';
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
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


