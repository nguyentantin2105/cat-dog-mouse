function Mouse(name){
	this.name = name;
	this.dead = false;
}

Cat.prototype.die = function(){
	this.dead = true;
}

module.exports = Mouse;