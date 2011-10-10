MoveHandlerTestGetMovesInSectorTest = TestCase("Move Handler In Sector");

MoveHandlerTestGetMovesInSectorTest
		.prototype.test0011Return0For00 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(0,0), new Point(1,1)));
	var moveArray = moveHandler.getMovesInSector(0,0);
	assertEquals(1,moveArray.length);
	assertEquals(0,moveArray[0]);
};

MoveHandlerTestGetMovesInSectorTest
		.prototype.test2211ReturnsNothingFor00 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(2,2), new Point(1,1)));
	var moveArray = moveHandler.getMovesInSector(0,0);
	assertEquals(0,moveArray.length);
};

MoveHandlerTestGetMovesInSectorTest
		.prototype.test0011Returns0For11 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(0,0), new Point(1,1)));
	var moveArray = moveHandler.getMovesInSector(1,1);
	assertEquals(1,moveArray.length);
	assertEquals(0,moveArray[0]);
};

MoveHandlerTestGetMovesInSectorTest
.prototype.test2211Returns0For11 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(2,2), new Point(1,1)));
	var moveArray = moveHandler.getMovesInSector(1,1);
	assertEquals(1,moveArray.length);
	assertEquals(0,moveArray[0]);
};

MoveHandlerTestGetMovesInSectorTest
.prototype.test0200ReturnsNothingFor01 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(0,2), new Point(0,0)));
	var moveArray = moveHandler.getMovesInSector(0,1);
	assertEquals(0,moveArray.length);
};

MoveHandlerTestGetMovesInSectorTest
.prototype.test2101Returns0For21 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(2,1), new Point(0,1)));
	var moveArray = moveHandler.getMovesInSector(2,1);
	assertEquals(1,moveArray.length);
};

MoveHandlerTestGetMovesInSectorTest
.prototype.test0222Returns0For02 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(0,2), new Point(2,2)));
	var moveArray = moveHandler.getMovesInSector(0,2);
	assertEquals(1,moveArray.length);
};

MoveHandlerTestGetMovesInSectorTest
		.prototype.test00110011Returns01For00 = function() {
	var moveHandler = new MoveHandler;
	moveHandler.addMove(new SuperMove(new Point(0,0), new Point(1,1)));
	moveHandler.addMove(new SuperMove(new Point(0,0), new Point(1,1)));
	var moveArray = moveHandler.getMovesInSector(0,0);
	assertEquals(2,moveArray.length);
	assertEquals(0,moveArray[0]);
	assertEquals(1,moveArray[1]);
};