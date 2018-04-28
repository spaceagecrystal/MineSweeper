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
    let randomRowIndex = Math.random() * numberOfRows;
    randomRowIndex = Math.floor(randomRowIndex);
    let randomColumnIndex = Math.random() * numberOfColumns;
    randomColumnIndex = Math.floor(randomColumnIndex);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++
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
