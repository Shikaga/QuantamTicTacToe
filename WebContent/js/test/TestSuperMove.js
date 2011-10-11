SuperMoveTest = TestCase("Test Super Move");

SuperMoveTest.prototype.testSuperMove = function() {
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	assertEquals(false,superMove.isClassical());
	assertEquals(point1,superMove.point1);
	assertEquals(point2,superMove.point2);
};

SuperMoveTest.prototype.testMake1stMoveClassical = function() {	
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	superMove.makeClassical(0);
	assertEquals(true,superMove.isClassical());
	assertEquals(point1,superMove.point1);
	assertEquals(point1,superMove.point2);
};

SuperMoveTest.prototype.testMake2ndMoveClassical = function() {	
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	superMove.makeClassical(1);
	assertEquals(true,superMove.isClassical());
	assertEquals(point2,superMove.point1);
	assertEquals(point2,superMove.point2);
};

SuperMoveTest.prototype.testMakeMoveClassicalByPoint = function() {
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	var point1Clone = new Point(1,1); 
	var moveDestroyed = superMove.makeClassicalPoint(point1Clone);
	
	assertEquals(true,superMove.isClassical());
	assertEquals(point1,superMove.point1);
	assertEquals(point1,superMove.point2);
	assertEquals(new Point(0, 0), moveDestroyed);
};

SuperMoveTest.prototype.testMake2ndMoveClassicalByPoint = function() {
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	var point2Clone = new Point(0,0); 
	var moveDestroyed = superMove.makeClassicalPoint(point2Clone);
	assertEquals(true,superMove.isClassical());
	assertEquals(point2,superMove.point1);
	assertEquals(point2,superMove.point2);
	assertEquals(new Point(1, 1), moveDestroyed);
};

SuperMoveTest.prototype.testMakeMoveClassicalByNotPoint = function() {
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	var point2Clone = new Point(0,0); 
	superMove.makeClassicalNotPoint(point2Clone);
	assertEquals(true,superMove.isClassical());
	assertEquals(point1,superMove.point1);
	assertEquals(point1,superMove.point2);
};

SuperMoveTest.prototype.testMake2ndMoveClassicalByNotPoint = function() {
	var point1 = new Point(1,1);
	var point2 = new Point(0,0);
	var superMove = new SuperMove(point1, point2);
	var point1Clone = new Point(1,1); 
	superMove.makeClassicalNotPoint(point1Clone);
	assertEquals(true,superMove.isClassical());
	assertEquals(point2,superMove.point1);
	assertEquals(point2,superMove.point2);
};