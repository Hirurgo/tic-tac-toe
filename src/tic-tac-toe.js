module.exports = class TicTacToe {
  constructor() {
    let player = 'x', field = Array(9).fill(null)
    const winSets = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    index = (row, col) => 3*row + col,
    checkWin = set => set.map(this.getFieldValue).join('').match(/(.)\1{2}/)
    this.getCurrentPlayerSymbol = () => player
    this.getFieldValue = (row, col, arr) => field[arr ? row : index(row, col)]
    this.noMoreTurns = () => !field.includes(null)
    this.getWinner = () => winSets.map(checkWin).join('')[0] || null
    this.isDraw = () => this.noMoreTurns() && !this.getWinner() 
    this.isFinished = () => this.isDraw() || !!this.getWinner()
    this.nextTurn = (row, col) => !field[index(row, col)] ? 
      (field[index(row, col)] = player, player = player == 'x' ? 'o' : 'x') : null
  }
}
