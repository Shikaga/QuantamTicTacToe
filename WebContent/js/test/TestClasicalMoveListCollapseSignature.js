TestClassicalMoveListCollapseSignature 
		= TestCase("Test Classical List Collapse Signature");



TestClassicalMoveListCollapseSignature
		.prototype.testMove00Returns1 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(0,0));
	assertEquals(1,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMove10Returns2 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(1,0));
	assertEquals(2,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMove20Returns4 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(2,0));
	assertEquals(4,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMove01Returns8 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(0,1));
	assertEquals(8,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMove11Returns16 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(1,1));
	assertEquals(16,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMove02Returns64 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(0,2));
	assertEquals(64,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMove22Returns256 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(2,2));
	assertEquals(256,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMoves0001Returns3 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(0,0));
	moveList.addMove(new Point(1,0));
	assertEquals(3,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testMoves0100Resturns3 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(1,0));
	moveList.addMove(new Point(0,0));
	assertEquals(3,moveList.collapseSignature());
};

TestClassicalMoveListCollapseSignature
		.prototype.testAllMovesReturns511 = function() {
	var moveList = new ClassicalMoveList();
	moveList.addMove(new Point(0,0));
	moveList.addMove(new Point(0,1));
	moveList.addMove(new Point(0,2));
	moveList.addMove(new Point(1,0));
	moveList.addMove(new Point(1,1));
	moveList.addMove(new Point(1,2));
	moveList.addMove(new Point(2,0));
	moveList.addMove(new Point(2,1));
	moveList.addMove(new Point(2,2));
	assertEquals(511,moveList.collapseSignature());
};