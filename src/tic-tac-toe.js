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

	isFinished() {
		var winner = this.getWinner();
		var draw = this.isDraw();


		if (winner === null && draw === false) 	return false;
		else return true;
	}

	getWinner() {
		var w,q,countX,countO,countNull;

		q=3;
		while(q--) {
			w=3;
			countX=0;
			countO=0;
			countNull=0;
			while(w--) {
				if (this.matrix[q][w] === 'o') countO++;
				if (this.matrix[q][w] === 'x') countX++;
				if (this.matrix[q][w] === null) countNull++;
			}
			if (countX === 3) return 'x';
			if (countO === 3) return 'o';
		}

		q=3;
		while(q--) {
			w=3;
			countX=0;
			countO=0;
			countNull=0;
			while(w--) {
				if (this.matrix[w][q] === 'o') countO++;
				if (this.matrix[w][q] === 'x') countX++;
				if (this.matrix[w][q] === null) countNull++;
			}
			if (countX === 3) return 'x';
			if (countO === 3) return 'o';
		}

		countX=0;
		countO=0;
		countNull=0;

		if (this.matrix[0][0] === 'x') countX++;
		if (this.matrix[1][1] === 'x') countX++;
		if (this.matrix[2][2] === 'x') countX++;	

		if (this.matrix[0][0] === 'o') countO++;
		if (this.matrix[1][1] === 'o') countO++;
		if (this.matrix[2][2] === 'o') countO++;

		if (this.matrix[0][0] === null) countNull++;
		if (this.matrix[1][1] === null) countNull++;
		if (this.matrix[2][2] === null) countNull++;
		
		if (countX === 3) return 'x';
		if (countO === 3) return 'o';

		countX=0;
		countO=0;
		countNull=0;
		if (this.matrix[0][2] === 'x') countX++;
		if (this.matrix[1][1] === 'x') countX++;
		if (this.matrix[2][0] === 'x') countX++;	

		if (this.matrix[0][2] === 'o') countO++;
		if (this.matrix[1][1] === 'o') countO++;
		if (this.matrix[2][0] === 'o') countO++;

		if (this.matrix[0][2] === null) countNull++;
		if (this.matrix[1][1] === null) countNull++;
		if (this.matrix[2][0] === null) countNull++;
		
		if (countX === 3) return 'x';
		if (countO === 3) return 'o';

		return null;
	}

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

	isDraw() {
		var w,q,countX,countO,countNull,draw=0;

		q=3;
		while(q--) {
			w=3;
			countX=0;
			countO=0;
			countNull=0;
			while(w--) {
				if (this.matrix[q][w] === 'o') countO++;
				if (this.matrix[q][w] === 'x') countX++;
				if (this.matrix[q][w] === null) countNull++;
			}
			if (countX>0 && countO>0 && countNull === 0) draw++;
		}

		q=3;
		while(q--) {
			w=3;
			countX=0;
			countO=0;
			countNull=0;
			while(w--) {
				if (this.matrix[w][q] === 'o') countO++;
				if (this.matrix[w][q] === 'x') countX++;
				if (this.matrix[w][q] === null) countNull++;
			}
			if (countX>0 && countO>0 && countNull === 0) draw++;
		}

		countX=0;
		countO=0;
		countNull=0;

		if (this.matrix[0][0] === 'x') countX++;
		if (this.matrix[1][1] === 'x') countX++;
		if (this.matrix[2][2] === 'x') countX++;	

		if (this.matrix[0][0] === 'o') countO++;
		if (this.matrix[1][1] === 'o') countO++;
		if (this.matrix[2][2] === 'o') countO++;

		if (this.matrix[0][0] === null) countNull++;
		if (this.matrix[1][1] === null) countNull++;
		if (this.matrix[2][2] === null) countNull++;
		
		if (countX>0 && countO>0 && countNull === 0) draw++;

		countX=0;
		countO=0;
		countNull=0;
		if (this.matrix[0][2] === 'x') countX++;
		if (this.matrix[1][1] === 'x') countX++;
		if (this.matrix[2][0] === 'x') countX++;	

		if (this.matrix[0][2] === 'o') countO++;
		if (this.matrix[1][1] === 'o') countO++;
		if (this.matrix[2][0] === 'o') countO++;

		if (this.matrix[0][2] === null) countNull++;
		if (this.matrix[1][1] === null) countNull++;
		if (this.matrix[2][0] === null) countNull++;
		
		if (countX>0 && countO>0 && countNull === 0) draw++;

		if (draw === 8) return true;
		else return false;
	}

	getFieldValue(rowIndex, colIndex) {
		return this.matrix[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
