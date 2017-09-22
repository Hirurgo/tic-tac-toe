module.exports = class TicTacToe {
	constructor() {
		this.player = 'x'
		this.matrix = Array(9).fill(null)
		this.genIndex = (row, col) => 3*row + col
		this.winSets = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
	}

	getCurrentPlayerSymbol() {
		return this.player;
	}
	
	getFieldValue(row, col) {
		return this.matrix[this.genIndex(row, col)]
	}

	nextTurn(row, col) {
		let index = this.genIndex(row, col)
		if (!this.matrix[index]) {
			this.matrix[index] = this.player
			this.player = this.player == 'x' ? 'o' : 'x'
		}
	}

	isFinished() {
		return this.isDraw() || this.getWinner() ? true : false;
	}
	
	getWinner() {
		const notNull = element => element !== null
		const notEqualPrev = (element, i , arr) => element === arr[i-1] ? false : true
		const takeValue = i => this.matrix[i]
		const toOnlyFirst = (first, current, i) => i ? null : first
		const toFirst = (acc, current, i) => !i ? current : acc
		const checkWin = cells => cells.map(takeValue).filter(notEqualPrev).reduce(toOnlyFirst)
		return this.winSets.map(checkWin).filter(notNull).reduce(toFirst, null);
	}

	noMoreTurns() {
		return !this.matrix.filter(e => e === null).length
	}

	isDraw() {
		return this.noMoreTurns() && !this.getWinner() ? true : false
	}
}