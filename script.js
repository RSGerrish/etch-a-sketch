let gridSize = 64;
let numGridSquares = 4096;
let gridContainer = document.createElement('div');

function drawBoard() {
  const btn = document.createElement('button');
  const container = document.createElement('div');
  const body = document.querySelector('body');

  btn.textContent = "RESET";

  btn.addEventListener('click', () => {
    do {
      gridSize = parseInt(prompt("Please enter the size of the grid (Maximum value of 100)", "64"));
    } while (gridSize > 100)
  
    numGridSquares = gridSize * gridSize;

    container.removeChild(gridContainer);
    reDrawBoard();
  })

  gridContainer.classList.add('grid');
  container.classList.add('main-container');

  body.appendChild(btn);
  body.appendChild(container);
  container.appendChild(gridContainer);

  for (i = 0; i < numGridSquares; i++) {
    const gridSquare = document.createElement('div');

    gridSquare.classList.add('grid-square');
    gridSquare.id = `grid-square-${i}`;
    gridSquare.style.width = 960 / gridSize;
    gridSquare.style.height = 960 / gridSize;

    gridContainer.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", function() {
      gridSquare.style.backgroundColor = "black";
    });
  }

  let styleString = "";

  for (i = 0; i < gridSize; i++) {
    styleString += (960 / gridSize).toString() + "px ";
  }

  gridContainer.style.gridTemplateColumns = styleString;
  gridContainer.style.gridTemplateRows = styleString;
}

function reDrawBoard() {
  const container = document.querySelector('.main-container');
  gridContainer = document.createElement('div');

  gridContainer.classList.add('grid');
  container.classList.add('main-container');

  container.appendChild(gridContainer);

  for (i = 0; i < numGridSquares; i++) {
    const gridSquare = document.createElement('div');

    gridSquare.classList.add('grid-square');
    gridSquare.id = `grid-square-${i}`;
    gridSquare.style.width = 960 / gridSize;
    gridSquare.style.height = 960 / gridSize;

    gridContainer.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", function() {
      gridSquare.style.backgroundColor = "black";
    });
  }

  let styleString = "";

  for (i = 0; i < gridSize; i++) {
    styleString += (960 / gridSize).toString() + "px ";
  }

  gridContainer.style.gridTemplateColumns = styleString;
  gridContainer.style.gridTemplateRows = styleString;
}

drawBoard();