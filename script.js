//complete this code
class Person {
	constructor(myName, myAge) {
		this.name = myName;
		this.age = myAge;
	}

	get getName() {
		return this.name;
	}

	set setAge(newAge) {
		this.age = newAge;
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
