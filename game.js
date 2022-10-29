const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;

  startGame();
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[2];
  const mapRows  = map.trim().split('\n');
  const mapRowsCols = mapRows.map(row => row.trim().split(''));
  console.log({ map, mapRows, mapRowsCols });
  console.log(mapRowsCols[0][1]);
 

  for (let row = 1; row <= 10; row++) {
    for (let col = 0; col <= 10; col++) {
      game.fillText(emojis[mapRowsCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
    }
  }
}