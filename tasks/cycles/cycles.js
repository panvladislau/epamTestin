/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial
 * while -> whileFactorial
 * do..while -> doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial = function(n){
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = i * result;
  }
  return result;
}

whileFactorial = function(n){
  let result = 1;
  while(n > 0){
    result = n * result;
    n--; 
  }
  return result;
}

doFactorial = function(n){
  let result = 1;
  do {
    result = n * result;
    n--; 
  } while (n > 0);
  return result;
}

/** TODO
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 */
let str;
const substr = ["I", " love", " JS"];
str = substr.join(" ");

/** TODO
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

let totalIncome = Object.values(personIncomes);
totalIncome = numArr.reduce((total, el) => el + total, 0)

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};
