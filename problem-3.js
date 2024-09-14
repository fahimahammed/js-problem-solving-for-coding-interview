// Factorial of a Number
// Write a function to calculate the factorial of a number. The factorial of n is the product of all positive integers less than or equal to n.
// Example: factorial(5) → 120

/**
 * num = 3
 * fact(3) = 1 * 2 * 3 = 6
 * fact(4) = 1 * 2 * 3 * 4 = 24
 * fact(5) = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }

    console.log(result);
}
factorial(4);
