MoveHandlerTest = TestCase("Move Handler Test");

MoveHandlerTest.prototype.testMoveHandlerStartsWithNoMoves = function() {
	var moveHandler = new MoveHandler();
	assertEquals(0,moveHandler.getMovesMade());
};

MoveHandlerTest.prototype.testAdd1MoveToMoveHandler = function() {
	var moveHandler = new MoveHandler();
	var point1 = new Point(0,0);
	var point2 = new Point(2,2);
	var move = new SuperMove(point1, point2);
	moveHandler.addMove(move);
	assertEquals(1,moveHandler.getMovesMade());
	assertEquals(move,moveHandler.getMove(0));
};

MoveHandlerTest.prototype.testAdd2MovesToMoveHandler = function() {
	var moveHandler = new MoveHandler();
	var point1 = new Point(0,0);
	var point2 = new Point(2,2);
	var move = new SuperMove(point1, point2);
	moveHandler.addMove(move);
	
	var point3 = new Point(1,1);
	var point4 = new Point(1,2);
	var move2 = new SuperMove(point3, point4);
	moveHandler.addMove(move2);

	assertEquals(2,moveHandler.getMovesMade());
	assertEquals(move2,moveHandler.getMove(1));
	
	var moveArray = [move,move2]; 
	
	assertEquals(moveArray,moveHandler.getMoves());
};

MoveHandlerTest.prototype.testEnumerateClassicalMoves = function() {
	var classicalMove1 = new Point(0,0);
	var classicalMove2 = new Point(1,1);
	var superMove = new SuperMove(classicalMove1,classicalMove2);
	
	var moveHandler = new MoveHandler();
	moveHandler.addMove(superMove);

	var moveArray = moveHandler.getClassicalMoves();
	
	var classicalMoveList1 = new ClassicalMoveList();
	classicalMoveList1.addMove(classicalMove1);

	var classicalMoveList2 = new ClassicalMoveList();
	classicalMoveList2.addMove(classicalMove2);
	
	assertEquals(2,moveArray.length);
	assertEquals(classicalMoveList1, moveArray[0]);
	assertEquals(classicalMoveList2, moveArray[1]);
};

MoveHandlerTest.prototype.testEnumerateValidClassicalMoves = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0,0), new Point(0,2)));
	moveHandler.addMove(new SuperMove(new Point(0,2), new Point(0,0)));
	moveArray = moveHandler.getValidClassicalMoves();
	assertEquals(2,moveArray.length);
	
	var classicalMoveList1 = new ClassicalMoveList();
	classicalMoveList1.addMove(new Point(0,0));
	classicalMoveList1.addMove(new Point(0,2));

	var classicalMoveList2 = new ClassicalMoveList();
	classicalMoveList2.addMove(new Point(0,2));
	classicalMoveList2.addMove(new Point(0,0));
	
	assertEquals(classicalMoveList1,moveArray[0]);
	assertEquals(classicalMoveList2,moveArray[1]);
};

MoveHandlerTest.prototype.testReturnNoCollapsibleMoves = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0,0), new Point(0,2)));
	moveHandler.addMove(new SuperMove(new Point(1,1), new Point(1,2)));
	collapseChoices = moveHandler.getCollapsable();
	assertEquals(0,collapseChoices.length);
};

MoveHandlerTest.prototype.testReturnCollapsibleMoves = function() {
	var moveHandler = new MoveHandler();
	var move1 = new SuperMove(new Point(0,0), new Point(0,2));
	var move2 = new SuperMove(new Point(0,2), new Point(0,0));
	moveHandler.addMove(move1);
	moveHandler.addMove(move2);
	collapseChoices = moveHandler.getCollapsable();
	assertEquals(2,collapseChoices.length);
};


