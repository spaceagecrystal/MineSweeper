let getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {

  let neigborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [-1, 1],
    [1, 0],
    [1, 1]
  ];

  const numberOfRows = bombBoard.length();
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neigborOffsets.forEach(offset => {

    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= numberOfRows &&
      neighborRowIndex < numberOfRows &&
      neighborColumnIndex >= 0 &&
      neighborColumnIndex < columnIndex)

    {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] != 'B') {
        numberOfBombs++

      }

    }

  });
  return numberOfBombs;
}
const flipTile = (playerBoard, bombBoard, rowIndex,columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] != ' '){
    console.log('This tile has already been flipped.')
    return;
  } else if (playerBoard[rowIndex][columnIndex] = 'B') {


  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);

  }

}


const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowCount = 0; rowCount < numberOfRows; rowCount++) {
    const row = [];
    for (let columnCount = 0; columnCount < numberOfColumns; columnCount++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rowCount = 0; rowCount < numberOfRows; rowCount++) {
    let row = [];
    for (let columnCount = 0; columnCount < numberOfColumns; columnCount++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    //ILl learn about control flow later.
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnIndex] != 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }

  }
  return board;
}
const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}
let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 3);
console.log('Player Board: ')
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard,0,0)
console.log("Updated Player Board");
printBoard(playerBoard);
