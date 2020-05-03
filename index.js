var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var dog = new Dog('KIKI');
var cat = new Cat('tom');
var mouse = new Mouse('Mickey');

try {
	cat.eat(dog);
} catch (error){
	console.log('Error while cat eating');
}
