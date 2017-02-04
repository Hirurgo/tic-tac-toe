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

	getWinner() {
		// var i,w,q,count,Draw;
		// var symbol=['x','o'];

		// i=2;
		// while(i--) {
		// 	Draw=0;
		// 	q=3;
		// 	while(q--) {
		// 		w=3;
		// 		count=0;
		// 		while(w--) {
		// 			if (this.matrix[q][w] === symbol[i]) count++;
		// 		}
		// 		if (count>2) return symbol[i];
		// 	}

		// 	q=3;
		// 	while(q--) {
		// 		w=3;
		// 		count=0;
		// 		while(w--) {
		// 			if (this.matrix[w][q] === symbol[i]) count++;
		// 		}
		// 		if (count>2) return symbol[i];
		// 	}

		// 	count=0
		// 	if (this.matrix[0][0] === symbol[i]) count++;
		// 	if (this.matrix[1][1] === symbol[i]) count++;
		// 	if (this.matrix[2][1] === symbol[i]) count++;	
		// 	if (count>2) return symbol[i];

		// 	if (this.matrix[0][2] === symbol[i]) count++;
		// 	if (this.matrix[1][1] === symbol[i]) count++;
		// 	if (this.matrix[2][0] === symbol[i]) count++;	
		// 	if (count>2) return symbol[i];
		// }
		// return null;
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
		
	}

	getFieldValue(rowIndex, colIndex) {
		return this.matrix[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
