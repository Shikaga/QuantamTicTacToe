Point = function(x,y) {
	this.x = x;
	this.y = y;
};

Point.prototype.equals = function(point) {
	return (this.y == point.y && this.x == point.x);
};