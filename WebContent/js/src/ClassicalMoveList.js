ClassicalMoveList = function() {
	this.moveList = [];
};

ClassicalMoveList.prototype.getMoves = function() {
	return this.moveList;
};

ClassicalMoveList.prototype.addMove = function(point) {
	this.moveList.push(point);
};

ClassicalMoveList.prototype.equals = function(list) {
	if (this.moveList.length == list.moveList.length)  {
		for (var i=0; i < this.moveList.length; i++) {
			if (!this.moveList[i].equals(list.moveList[i])) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
	
};

ClassicalMoveList.prototype.collapseSignature = function() {
	var signaturesSum = 0; 
	for (move in this.moveList) {		
		signaturesSum = signaturesSum + this.getMoveSignature(this.moveList[move]);
	}
	return signaturesSum;
};

ClassicalMoveList.prototype.getMoveSignature = function(move) {	
	return Math.pow(2,move.x)*Math.pow(8,move.y);
};

ClassicalMoveList.prototype.isValid = function() {
	for(var i=0; i < this.moveList.length; i++) {
		for(var j=i+1; j < this.moveList.length; j++) {			
			if (this.moveList[i].equals(this.moveList[j]))
				return false;
		}
	}
	return true;
};