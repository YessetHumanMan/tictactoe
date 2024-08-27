document.addEventListener("DOMContentLoaded", () => {
  const gameBorder = document.getElementById('gameBorder')
  const restartBtn = document.getElementById('restartBtn')
  let currentPlayer = 'X'
  let board = Array(9).fill(null)
  // let cellElement = document.getElementById('cell')
})

function createBoard () {
  gameBoard.innerHTML = '';
  board.forEach((cell,index) => {
    const cellElement = document.createElement('div')
    cellElement = document.classList.add('cell')
    cellElement = addEventListener('click',() => handleClick(index))
    gameBorder.appendChild(cellElement)
  }) 
}

function handleClick () {
  if(board[index] || checkWinner()) return;
  board[index] = currentPlayer
  updateBorder()
  if(checkWinner()) {
    alert(`${currentPlayer} winner!`)
  } else if(board.every(cell => cell)){
    alert('It is a draw!')
  }
}
