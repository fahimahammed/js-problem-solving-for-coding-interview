// Find Missing Number in an Array
// Write a function that finds the missing number in an array containing numbers from 1 to n.
// Example: findMissingNumber([1, 2, 4, 5, 6], 6) → 3

function findMissingNumber(arr, n) {
    let sum = 0;
    for (let num of arr) {
        sum = sum + num;
    }

    const totalSum = n * (n + 1) / 2;
    const result = totalSum - sum;
    console.log(result);
}

findMissingNumber([1, 3, 4, 5, 6], 6)

/**
 * n = 5
 * arr = [1, 5, 3, 4] = 13
 * actual arr= [1, 2, 3, 4, 5] = 15
 * r = 15- 13 = 2
 * 
 * Sn = n(n+1)/2 = 5*(5+1) / 2 = 30 /2 = 15
 */