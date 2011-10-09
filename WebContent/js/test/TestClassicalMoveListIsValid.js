TestClassicalMoveListIsValid = TestCase("Test Classical Move List isValid");

TestClassicalMoveListIsValid.prototype.test00IsValid = function() {
	var list = new ClassicalMoveList();
	list.addMove(new Point(0,0));
	assertEquals(true,list.isValid());
};

TestClassicalMoveListIsValid.prototype.test0001IsValid = function() {
	var list = new ClassicalMoveList();
	list.addMove(new Point(0,0));
	list.addMove(new Point(0,1));
	assertEquals(true,list.isValid());
};

TestClassicalMoveListIsValid.prototype.test0000IsInvalid = function() {
	var list = new ClassicalMoveList();
	list.addMove(new Point(0,0));
	list.addMove(new Point(0,0));
	assertEquals(false,list.isValid());
};

TestClassicalMoveListIsValid.prototype.test000100IsValid = function() {
	var list = new ClassicalMoveList();
	list.addMove(new Point(0,0));
	list.addMove(new Point(0,1));
	list.addMove(new Point(0,0));
	assertEquals(false,list.isValid());
};