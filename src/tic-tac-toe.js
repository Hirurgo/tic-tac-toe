class TicTacToe {
	constructor() {
		this.currentPlayerSymbol = 'x';
		this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
	}

	getCurrentPlayerSymbol() {
		return this.currentPlayerSymbol;
	}

	nextTurn(rowIndex, columnIndex) {
		if (this.matrix[rowIndex][columnIndex] === null) {
			this.matrix[rowIndex][columnIndex] =  this.currentPlayerSymbol;
			if (this.currentPlayerSymbol === 'o')  this.currentPlayerSymbol = 'x';
			else this.currentPlayerSymbol = 'o';
		}
	}

	isFinished() {}

	getWinner() {}

	noMoreTurns() {
		var w,q=3;
		while(q--) {
			w=3;
			while(w--) {
				if (this.matrix[q][w] === null) return false;
			}
		}
		return true;
	}

	isDraw() {}

	getFieldValue(rowIndex, colIndex) {
		return this.matrix[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
