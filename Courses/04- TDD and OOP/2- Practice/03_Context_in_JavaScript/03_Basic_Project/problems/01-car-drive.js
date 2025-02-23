// Your code here
class Car{
	constructor(speed = 0){
		this.speed = speed;
	}

	// this is function (arrow) that take a new speed as argument and return the new speed
	drive = (newSpeed) => this.speed = newSpeed;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
