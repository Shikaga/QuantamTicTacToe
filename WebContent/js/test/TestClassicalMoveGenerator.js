ClassicalMoveGeneratorTest = TestCase("Test Classiacal Move Generator");

ClassicalMoveGeneratorTest.prototype.
		testConvertSuperMoveToTwoClassicalMoves = function() {
	var classicalMove1 = new Point(0,0);
	var classicalMove2 = new Point(1,1);
	var superMove = new SuperMove(classicalMove1,classicalMove2);
	
	var moveHandler = new MoveHandler();
	moveHandler.addMove(superMove);

	var moveArray = ClassicalMoveGenerator.generateClassicalMove(moveHandler.getMoves());
	
	var classicalMoveList1 = new ClassicalMoveList();
	classicalMoveList1.addMove(classicalMove1);

	var classicalMoveList2 = new ClassicalMoveList();
	classicalMoveList2.addMove(classicalMove2);
	
	assertEquals(2,moveArray.length);
	assertEquals(classicalMoveList1, moveArray[0]);
	assertEquals(classicalMoveList2, moveArray[1]);
};

ClassicalMoveGeneratorTest.prototype.
		testConvertTwoSuperMoveToFourClassicalMoves = function() {
	
	var classicalMove1 = new Point(0,0);
	var classicalMove2 = new Point(1,1);
	var superMove = new SuperMove(classicalMove1,classicalMove2);
	
	var classicalMove3 = new Point(0,1);
	var classicalMove4 = new Point(1,2);
	var superMove2 = new SuperMove(classicalMove3,classicalMove4);
	
	var moveHandler = new MoveHandler();
	moveHandler.addMove(superMove);
	moveHandler.addMove(superMove2);
	
	var moveArray = ClassicalMoveGenerator.generateClassicalMove(moveHandler.getMoves());
	
	var classicalMoveList1 = new ClassicalMoveList();
	classicalMoveList1.addMove(classicalMove1);
	classicalMoveList1.addMove(classicalMove3);

	var classicalMoveList2 = new ClassicalMoveList();
	classicalMoveList2.addMove(classicalMove1);
	classicalMoveList2.addMove(classicalMove4);

	var classicalMoveList3 = new ClassicalMoveList();
	classicalMoveList3.addMove(classicalMove2);
	classicalMoveList3.addMove(classicalMove3);
	
	var classicalMoveList4 = new ClassicalMoveList();
	classicalMoveList4.addMove(classicalMove2);
	classicalMoveList4.addMove(classicalMove4);
	
	assertEquals(4,moveArray.length);
	assertEquals(classicalMoveList1, moveArray[0]);
	assertEquals(classicalMoveList3, moveArray[1]);
	assertEquals(classicalMoveList2, moveArray[2]);
	assertEquals(classicalMoveList4, moveArray[3]);
		
};

ClassicalMoveGeneratorTest
		.prototype.testGenerationWithClassicalMove = function() {
	var moveHandler = new MoveHandler();
	var classicalMove1 = new Point(0,0);
	var classicalMove2 = new Point(1,1);
	var superMove = new SuperMove(classicalMove1,classicalMove2);
	
	var classicalMove3 = new Point(0,0);
	var classicalMove4 = new Point(1,1);
	var superMove2 = new SuperMove(classicalMove3,classicalMove4);
	
	var classicalMove5 = new Point(1,0);
	var classicalMove6 = new Point(2,1);
	var superMove3 = new SuperMove(classicalMove5,classicalMove6);
	
	moveHandler.addMove(superMove);
	moveHandler.addMove(superMove2);
	moveHandler.addMove(superMove3);
	
	moveHandler.movesMade[0].makeClassical(1);
	moveHandler.movesMade[1].makeClassical(2);
	
	var classicalMoveList1 = new ClassicalMoveList();
	classicalMoveList1.addMove(classicalMove1);
	classicalMoveList1.addMove(classicalMove4);
	classicalMoveList1.addMove(classicalMove5);

	var classicalMoveList2 = new ClassicalMoveList();
	classicalMoveList2.addMove(classicalMove1);
	classicalMoveList2.addMove(classicalMove4);
	classicalMoveList2.addMove(classicalMove6);

	var moveArray = moveHandler.getValidClassicalMoves();
	jstestdriver.console.log(moveArray);
	assertEquals(2,moveArray.length);
	assertEquals(classicalMoveList1, moveArray[0]);
	assertEquals(classicalMoveList2, moveArray[1]);
	
};
