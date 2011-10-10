TestMoveHandlerCollapseString = TestCase("Test Move Handler Collapse String");

TestMoveHandlerCollapseString.prototype.testCollapse00020002Move0Point00 = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.collapseString(0,new Point(0,0));
	var classicalMoves = moveHandler.getValidClassicalMoves();
	assertEquals(1,classicalMoves.length);
	var classicalMoveList = new ClassicalMoveList();
	classicalMoveList.addMove(new Point(0, 0));
	classicalMoveList.addMove(new Point(0, 2));
	assertEquals(classicalMoveList,classicalMoves[0]);
	assertEquals(2,moveHandler.getMovesMade());
};

TestMoveHandlerCollapseString.prototype.testCollapse00020002Move0Point01 = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.collapseString(0,new Point(0,2));
	var classicalMoves = moveHandler.getValidClassicalMoves();
	assertEquals(1,classicalMoves.length);
	var classicalMoveList = new ClassicalMoveList();
	classicalMoveList.addMove(new Point(0, 2));
	classicalMoveList.addMove(new Point(0, 0));
	assertEquals(classicalMoveList,classicalMoves[0]);
};

TestMoveHandlerCollapseString.prototype.testCollapse00020002Move1Point00 = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.collapseString(1,new Point(0,0));
	var classicalMoves = moveHandler.getValidClassicalMoves();
	assertEquals(1,classicalMoves.length);
	var classicalMoveList = new ClassicalMoveList();
	classicalMoveList.addMove(new Point(0, 2));
	classicalMoveList.addMove(new Point(0, 0));
	assertEquals(classicalMoveList,classicalMoves[0]);
};

TestMoveHandlerCollapseString.prototype.testCollapse00020002Move1Point01 = function() {
	var moveHandler = new MoveHandler();
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
	moveHandler.collapseString(1,new Point(0,2));
	var classicalMoves = moveHandler.getValidClassicalMoves();
	assertEquals(1,classicalMoves.length);
	var classicalMoveList = new ClassicalMoveList();
	classicalMoveList.addMove(new Point(0, 0));
	classicalMoveList.addMove(new Point(0, 2));
	assertEquals(classicalMoveList,classicalMoves[0]);
};

TestMoveHandlerCollapseString.prototype
.testCollapse000200121202Move0Point00 = function() {
var moveHandler = new MoveHandler();
moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(1, 2)));
moveHandler.addMove(new SuperMove(new Point(1, 2), new Point(0, 2)));
moveHandler.collapseString(0,new Point(0,0));
var classicalMoves = moveHandler.getValidClassicalMoves();
assertEquals(1,classicalMoves.length);

var classicalMoveList = new ClassicalMoveList();
classicalMoveList.addMove(new Point(0, 0));
classicalMoveList.addMove(new Point(1, 2));
classicalMoveList.addMove(new Point(0, 2));
assertEquals(classicalMoveList,classicalMoves[0]);
};

TestMoveHandlerCollapseString.prototype
.testCollapse000200121202Move1Point00 = function() {
var moveHandler = new MoveHandler();
moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(1, 2)));
moveHandler.addMove(new SuperMove(new Point(1, 2), new Point(0, 2)));
moveHandler.collapseString(1,new Point(0,0));
var classicalMoves = moveHandler.getValidClassicalMoves();
jstestdriver.console.log(classicalMoves);
assertEquals(1,classicalMoves.length);

var classicalMoveList = new ClassicalMoveList();
classicalMoveList.addMove(new Point(0, 2));
classicalMoveList.addMove(new Point(0, 0));
classicalMoveList.addMove(new Point(1, 2));
assertEquals(classicalMoveList,classicalMoves[0]);
};

TestMoveHandlerCollapseString.prototype
.testCollapse000200121202Move2Point02 = function() {
var moveHandler = new MoveHandler();
moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(0, 2)));
moveHandler.addMove(new SuperMove(new Point(0, 0), new Point(1, 2)));
moveHandler.addMove(new SuperMove(new Point(1, 2), new Point(0, 2)));
moveHandler.collapseString(2,new Point(0,2));
var classicalMoves = moveHandler.getValidClassicalMoves();
jstestdriver.console.log(classicalMoves);
assertEquals(1,classicalMoves.length);

var classicalMoveList = new ClassicalMoveList();
classicalMoveList.addMove(new Point(0, 0));
classicalMoveList.addMove(new Point(1, 2));
classicalMoveList.addMove(new Point(0, 2));
assertEquals(classicalMoveList,classicalMoves[0]);
};

