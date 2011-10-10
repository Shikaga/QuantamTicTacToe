TestMoveHandlerCollapseString = TestCase("Test Move Handler Collapse String");

TestMoveHandlerCollapseString.prototype.testCollapse00020002Move0Point00 = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.collapseString(0,00);
	var classicalMoves = moveHandler.getValidClassicalMoves();
	jstestdriver.console.log(classicalMoves);
	assertEquals(1,classicalMoves.length);
	var classicalMoveList = new ClassicalMoveList();
	classicalMoveList.addMove(new Point(0, 0));
	classicalMoveList.addMove(new Point(0, 2));
	assertEquals(classicalMoveList,classicalMoves[0]);
};