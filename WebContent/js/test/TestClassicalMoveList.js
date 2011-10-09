TestClassicalMoveList = TestCase("Classical Move List Test");

TestClassicalMoveList.prototype.testListStartsEmpty = function() {
	var classicalMoveList = new ClassicalMoveList();
	assertEquals(0,classicalMoveList.getMoves().length);
};

TestClassicalMoveList.prototype.testAddClassicalMove = function() {
	var classicalMoveList = new ClassicalMoveList();
	var classicalMove = new Point(1,1);
	classicalMoveList.addMove(classicalMove);
	assertEquals(1,classicalMoveList.getMoves().length);
	assertEquals(classicalMove,classicalMoveList.getMoves()[0]);
};


TestClassicalMoveList.prototype.testAddedClassicalMovesGoOnEnd = function() {
	var classicalMoveList = new ClassicalMoveList();
	var classicalMove1 = new Point(0,0);
	classicalMoveList.addMove(classicalMove1);
	var classicalMove2 = new Point(1,1);
	classicalMoveList.addMove(classicalMove2);	
	assertEquals(2,classicalMoveList.getMoves().length);
	assertEquals(classicalMove1, classicalMoveList.getMoves()[0]);
	assertEquals(classicalMove2, classicalMoveList.getMoves()[1]);
};

TestClassicalMoveList.prototype.testEqualsMethod = function() {
	var originalList = new ClassicalMoveList();
	assertEquals(true,originalList.equals(originalList));
	
	var listWith1Element = new ClassicalMoveList();
	var point1 = new Point(0,0);
	listWith1Element.addMove(point1);
	assertEquals(false,originalList.equals(listWith1Element));
	
	var point2 = new Point(0,1);
	originalList.addMove(point2);
	assertEquals(false,originalList.equals(listWith1Element));
};

