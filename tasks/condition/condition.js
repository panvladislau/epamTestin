/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case if y less than 10
 * or multiplication in case of greater or equal than 10
 * result assign to z1 and z2 variables accordingly
 * Task 1 - if else - z1
 * Task 2 - ternary operator - z2
 */
let z1;
let z2;
const x = 3;
const y = 11;

if( y < 10 ){
    z1 = x + y;
} else{
    z1 = x * y;
}

y < 10 ? z2 = x + y : z2 = x * y;


/** TODO
 * The system receives 3 params - alpha, beta, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on the passed operator param.
 * Assign result to task2 variable
 */
let task2;
const alpha = 3;
const beta = 7;
const operator = "add";

function manipulations(alpha, beta, operator){
    switch (operator) {
        case "add":
            return alpha + beta;

        case "subtract":
            return alpha - beta;

        case "multiply":
            return alpha * beta;

        case "divide":
            return alpha / beta;
    }
}


/**
 * TODO
 * Write the logic that will calculate the amount of discount
 * considering the 'redemption' amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign the result to the 'discount' variable
 */
const redemption = 5000;
let discount;

if( redemption >= 0 && redemption <= 350){
    discount = redemption * 0 / 100;
}else if (redemption >= 351 && redemption <= 1350) {
    discount = redemption * 15 / 100;
}else if(redemption >= 1351 && redemption <= 2700){
    discount = redemption * 30 / 100;
}else if(redemption >= 2701 && redemption <= 6500){
    discount = redemption * 45 / 100;
}


//TODO put your code here


module.exports = {
    z1,
    z2,
    x,
    y,
    alpha,
    beta,
    operator,
    task2,
    redemption,
    discount
};
