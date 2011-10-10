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