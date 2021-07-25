/**
 * write function that will do sum for two numbers
 *
 */
function sum(a, b) {
	return a + b;
}

console.log(sum(5, 2))

/**
 * write function that returns firstName and lastName of a given object
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
	return `${object.firstName}  ${object.lastName}`;
}

let person1 = {
	    firstName: "John",
	    lastName: "Dou" 
	}

console.log(getFullName(person1))


/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	n = n / 2;
	return Number.isInteger(n);
}

console.log(isOdd(6));

/**
 * write function that returns shortest of the words in the given array
 * @example
 * console.log(getShortest(["one", "two", "three"])) // one
 */
function getShortest(wordArray) {
	let shortest = wordArray[0]
	for (let i = 1; i < wordArray.length; i++) {
		console.log(wordArray[i].length)
		if(shortest.localeCompare(wordArray[i]) === -1){
			shortest = wordArray[i];
		}
	}
	return shortest;
}

console.log(getShortest(["qwqer", "two", "three"]))


/**
 * write function that returns word google with given numbers of "o" symbols
 * @example
 * console.log(getGoogle(5)) // gooooogle
 */
function getGoogle(n) {
	let oStr = '';
	for( let i = 0; i < n; i++){
		oStr = oStr + 'o';
	}
	return `g${oStr}gle`;
}

console.log(getGoogle(3));

/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default ones)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age
	}
}

console.log(getUser("John", "Dou", 42))

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	return path.reduce((total, el) => el.distance + total, 0);
}

let path = [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}];

console.log(getTotalPath(path));

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function discountFunction(percentage) {
	return function (amount) {
		return amount - amount * percentage / 100
	};
}

const discount10 = discountFunction(10);
console.log(discount10(90)); // 81
console.log(discount10(100)); // 90

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		console.log(Object.keys(this).join(" "));
	},
	call() {
		return `My name is ${this.name} ${this.lastName} and I am ${this.age} years old. My best friend is ${this.friends}`;
	}

};

myObject.keys();
console.log(myObject.call());

module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};
