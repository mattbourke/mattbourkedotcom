class Animal {
	constructor(legs) { //class constructor
		this.species = 'cat';
		this.legs    = 4;
		this.size    = 'small';
	}

	sayName() { //class method
		console.log('Hi, I am a', this.species + '.');
	}
}

class Dog extends Animal {
	constructor(name,legs) {
		super(legs); //call the parent method with super
		this.species = 'Dog';
		this.name    = name;
	}

	getfullName() { //dog full name
		return `${this.name} ${this.species}`; // an simple template string example
	}
}

let woofy = new Dog('Snoop',4);
woofy.sayName();

console.log('I am '+woofy.size);
let name = woofy.getfullName();
console.log(name);
