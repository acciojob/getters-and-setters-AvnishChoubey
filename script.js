//complete this code
class Person {
	constructor(myName, myAge) {
		this._name = myName;
		this._age = myAge;
	}

	get name() {
		return this._name;
	}

	get age() {
		return this._age;
	}

	set age(newAge) {
		this._age = newAge;
	}
}

class Student extends Person {
	constructor(myName, myAge) {
		super(myName, myAge);
	}
	
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(myName, myAge) {
		super(myName, myAge);
	}
	
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
