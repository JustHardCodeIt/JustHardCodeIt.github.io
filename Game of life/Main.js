var canvasWidth = 6000,  canvasHeight = 5800;
var columnCount = 100;
var rowCount = 100;



var Paused = false;

var Cells = createCells();


var cellSize = 10;
function setup() {

  createCanvas(canvasWidth, canvasHeight);
  background(51);

}

function draw() {

  if (!Paused){
    GetNeighbors(Cells);
    for(let x = 0; x < 100; x++){
      for (let y = 0; y < 100; y++) {
        Cells[x][y].alive = isAliveNextTurn(Cells[x][y]);
      }
    }
  }
  Draw(Cells);

  fill(255);
  rect(Math.floor(mouseX * 10), Math.floor(mouseY * 10), cellSize, cellSize);

}

function mouseClicked() {
  console.log(mouseX, mouseY)
  const cell = Cells[Math.floor(mouseX / cellSize)][Math.floor(mouseY / cellSize)];
    console.log(cell.alive);
  cell.alive = !cell.alive;

}


function createCells(){
  const cols = [];
  for(let x = 0; x < 100; x++){
    cols[x] = [];
    for (let y = 0; y < 100; y++) {
      cols[x][y] = { neighbors: 0, alive: Math.random() < 0.5 };

    }
  }
  return cols;
}



function Draw(cells){
  for(let x = 0; x < 100; x++){
    for (let y = 0; y < 100; y++) {
      if (cells[x][y].alive) {
        fill(150, 255, 150);
      } else {
        fill(0, 0, 0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      stroke(120);
    }
  }
}


function GetNeighbors(cells){
  for(let x = 0; x < 100; x++){
    for (let y = 0; y < 100; y++) {
      countNeighbors(x, y, cells);
    }
  }
}


function countNeighbors(x, y, cells) {
  cells[x][y].neighbors = 0;
  for (let dx = -1; dx<=1; dx++) {
    for (let dy = -1; dy<=1; dy++) {
      const nx = x + dx;
      const ny = y + dy;
      if ((dx !==0 || dy !== 0) &&  nx >= 0 && ny >= 0 && nx < columnCount && ny < rowCount && cells[nx][ny].alive) {
        cells[x][y].neighbors++;
      }
    }
  }
}


function isAliveNextTurn(cell) {

  // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
  if (cell.alive && cell.neighbors < 2) return false;

  // Any live cell with two or three live neighbours lives on to the next generation.
  if (cell.alive && (cell.neighbors === 2 || cell.neighbors === 3)) return true;

  // Any live cell with more than three live neighbours dies, as if by overpopulation.
  if(cell.alive && cell.neighbors > 3) return false;

  // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  if(!cell.alive && cell.neighbors === 3) return true;

  return cell.alive;
}


function keyPressed() {
  if(key !== 'C') {
    Paused = !Paused;
  }


  else if(key === 'R'){
  	for(let x = 0; x < 100; x++){
      for (let y = 0; y < 100; y++) {
        Cells[x][y].alive = false;
      }
    }
for(let x = 0; x < 100; x++){
      for (let y = 0; y < 100; y++) {
        if(Math.random < .5){
        Cells[x][y].alive = true;
    }
      }
    }

  } 

  else {
    for(let x = 0; x < 100; x++){
      for (let y = 0; y < 100; y++) {
        Cells[x][y].alive = false;
      }
    }
  }
}
