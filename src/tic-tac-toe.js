module.exports = class TicTacToe {
  constructor() {
    let player = 'x', matrix = Array(9).fill(null)
    const winSets = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    genIndex = (row, col) => 3*row + col,
    notEqualPrev = (e, i , arr) => e === arr[i-1] ? false : true,
    toOnlyFirst = (first, current, i) => i ? null : first,
    toFirst = (acc, current, i) => !i ? current : acc,
    checkWin = cells => cells.map(this.getFieldValue).filter(notEqualPrev).reduce(toOnlyFirst)
    this.getCurrentPlayerSymbol = () => player
    this.getFieldValue = (row, col, arr) => matrix[arr ? row : genIndex(row, col)]
    this.noMoreTurns = () => !matrix.filter(e=>e==null).length
    this.getWinner = () =>  winSets.map(checkWin).filter(e=>e!=null).reduce(toFirst, null)
    this.isDraw = () => this.noMoreTurns() && !this.getWinner() ? true : false
    this.isFinished = () => this.isDraw() || this.getWinner() ? true : false
    this.nextTurn = (row, col) => {
    	if (!matrix[genIndex(row, col)]) {
        matrix[genIndex(row, col)] = player
        player = player == 'x' ? 'o' : 'x'
    	}
    }
  }
}