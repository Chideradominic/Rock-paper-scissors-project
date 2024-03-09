let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
    loses: 0,
    ties: 0
};


updateScoreElement();

/**if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };**/




function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  let result ='';

if (playerMove === 'Scissors'){

    if (computerMove === 'Paper')
    result = 'Tie';
  else if (computerMove === 'Rock')
    result = 'You won!';
  else if (computerMove === 'Scissors')
    result = 'You Lose.';

    

}
else if (playerMove=== 'Paper') {
  if (computerMove === 'Paper')
      result = 'Tie';
    else if (computerMove === 'Rock')
      result = 'You won!';
    else if (computerMove === 'Scissors')
      result = 'You Lose.';

      
}


else if (playerMove==='Rock') {
if (computerMove === 'Rock'){
  result = 'Tie';}
  else if (computerMove === 'Paper')
  result ='You Lose.';
else if (computerMove === 'Scissors')
  result = 'You won!';
 
  
}


if (result === 'You won!') {
score.wins += 1;
} else if (result === 'You Lose.') {
score.loses +=1;
} else if (result === 'Tie') {
score.ties +=1
};



localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `you
  <img src="image/${playerMove}-emoji.png" class="move-icon">
  <img src="image/${computerMove}-emoji.png"class="move-icon">
  Computer`;


} 
function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML= `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber>= 2/3 && randomNumber < 1){
    computerMove = ('Scissors')
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
    computerMove = ('Paper')
  }
  else if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove =('Rock')

}
return computerMove;
}