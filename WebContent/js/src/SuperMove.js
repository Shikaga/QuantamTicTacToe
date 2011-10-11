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

SuperMove.prototype.makeClassicalPoint = function(point) {
	var returnPoint = null;
	if (this.point1.equals(point)) {
		returnPoint = this.point2;
		this.makeClassical(0);		
	}
	else {
		returnPoint = this.point1;
		this.makeClassical(1);
	}
	return returnPoint;
};

SuperMove.prototype.makeClassicalNotPoint = function(point) {
	if (this.point1.equals(point)) {
		this.makeClassical(1);		
	}
	if (this.point2.equals(point)) {
		this.makeClassical(0);		
	}
};