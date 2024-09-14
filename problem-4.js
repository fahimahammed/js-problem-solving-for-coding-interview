// FizzBuzz Problem
// Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".
// Example: fizzBuzz(15) should print:

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz")
        }

        else {
            console.log(i);
        }
    }
}

fizzBuzz(15);

/**
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */