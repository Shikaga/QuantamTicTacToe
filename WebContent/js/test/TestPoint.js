PointTest = TestCase("Point Test");

PointTest.prototype.testPointIs00byDefault = function() {
	var point = new Point(0,0);
	assertEquals(0,point.x);
	assertEquals(0,point.y);
};

PointTest.prototype.testPointTakesValuesFromParameters = function() {
	var point = new Point(1,2);
	assertEquals(1,point.x);
	assertEquals(2,point.y);
};

PointTest.prototype.testPointCanTakeNegativeValues = function() {
	var point = new Point(-1,-2);
	assertEquals(-1,point.x);
	assertEquals(-2,point.y);
};

PointTest.prototype.testEqualsMethod = function() {
	var originalPoint = new Point(0,0);
	assertEquals(true,originalPoint.equals(originalPoint));
	
	var differentYPoint = new Point(0,1);
	assertEquals(false,originalPoint.equals(differentYPoint));
	
	var identicalPoint = new Point(0,0);
	assertEquals(true,originalPoint.equals(identicalPoint));
	
	var differentXPoint = new Point(1,0);
	assertEquals(false,originalPoint.equals(differentXPoint));
};