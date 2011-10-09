MoveHandler = function() {
	this.movesMade = [];
};

MoveHandler.prototype.getMovesMade = function() {
	return this.movesMade.length;
};

MoveHandler.prototype.addMove = function(move) {
	this.movesMade.push(move);
};

MoveHandler.prototype.getMove = function(number) {
	return this.movesMade[number];
};

MoveHandler.prototype.getClassicalMoves = function() {
	return ClassicalMoveGenerator.generateClassicalMove(this.movesMade);
};

MoveHandler.prototype.getMoves = function() {
	return this.movesMade;
};

MoveHandler.prototype.getMovesInSector = function(x,y) {
	var returnArray = [];
	for (move in this.movesMade) {		
		if (
				((this.movesMade[move].point1.x == x) &&
				(this.movesMade[move].point1.y == y)) || 
				((this.movesMade[move].point2.x == x) &&
				(this.movesMade[move].point2.y == y))) {			
			returnArray.push(move);
		}
	}
	return returnArray;
};

MoveHandler.prototype.getValidClassicalMoves = function() {
	var returnArray = [];
	var moveList = this.getClassicalMoves();
	for (move in moveList) {
		if (moveList[move].isValid()) {
			returnArray.push(moveList[move]);
		}
	}
	return returnArray;
};

MoveHandler.prototype.getCollapsable = function() {
	var returnArray = [];
	var moveList = this.getClassicalMoves();
	for (move in moveList) {
		if (!moveList[move].isValid()) {
			returnArray.push(moveList[move]);
		}
	}
	return returnArray;
};