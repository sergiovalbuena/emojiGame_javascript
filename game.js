const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);


function startGame() {
  game.fillRect(0,50, 10, 10);
  //game.clearRect(0, 0, 3, 3);
  game.font = '25px Verdana';
  game.fillStyle = 'Purple';
  game.textAlign = 'center'; //start, end
  game.fillText('Happy', 100, 100);
}

