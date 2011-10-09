ClassicalMoveGenerator = function() {
};

ClassicalMoveGenerator.generateClassicalMove = function(moves) {
	var movesThusFar = [ new ClassicalMoveList() ];
	
	
	for (var i=0; i < moves.length; i++) {
		//Duplicate all current moves
		if (!moves[i].isClassical()) {			
			var moveLength = movesThusFar.length;
			for (var j=0; j < moveLength; j++) {
				movesThusFar.push(ClassicalMoveGenerator.cloneMoveList(movesThusFar[j]));
			}
		}
		
		for (var j=0; j < movesThusFar.length; j++) {
			if (j*2 < movesThusFar.length) {
				movesThusFar[j].addMove(moves[i].point1);
			} else {
				movesThusFar[j].addMove(moves[i].point2);				
			}
		}
	}
	return movesThusFar;
};

ClassicalMoveGenerator.cloneMoveList = function(moveList) {
	var returnMoveList = new ClassicalMoveList();
	var returnArray = [];
	for (var i=0; i < moveList.moveList.length; i++) {
		returnArray.push(moveList.moveList[i]);
	}
	returnMoveList.moveList = returnArray;
	return returnMoveList;
};
