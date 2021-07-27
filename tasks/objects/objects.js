/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
	firstName: 'Petr',
	lastName: 'Pershiy'
}; 

person.getFulName = function(){
	return `${this.firstName} ${this.lastName}`;
}

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
	grade: 8
};

student.__proto__ = person;

student.getFulName = function(){
	return `${this.firstName} ${this.lastName} ${this.grade}`;
}

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);

module.exports = {
	person,
	student,
	student2
};