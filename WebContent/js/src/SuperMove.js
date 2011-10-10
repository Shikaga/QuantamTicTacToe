SuperMove = function(point1,point2) {
	this.point1 = point1;
	this.point2 = point2;
	this.classical = false;
};

SuperMove.prototype.makeClassical = function(point) {
	if (point == 0) {		
		this.point2 = this.point1;
	} else {
		this.point1 = this.point2;
	}
	this.classical = true;
};

SuperMove.prototype.isClassical = function() {
	return this.classical;
};