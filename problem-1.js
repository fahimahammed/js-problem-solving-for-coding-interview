// Rotate an Array
// Write a function that rotates an array k times. Each rotation moves the last element of the array to the front.
// Example: rotateArray([1, 2, 3, 4, 5], 2) → [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
    const n = arr.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = arr[(n - k + i) % n]
    }
    console.log(result);
}
rotateArray([1, 2, 3, 4, 5], 3)


/**
 * arr = [1, 2, 3, 4, 5]
 * n = 5
 * k = 2
 * 
 * result = [];
 * result[0] = 4 = arr[3] // index = (n - k + i) % n = (5 - 2 + 0) % 5 = 3 % 5 = 3
 * result[1] = 5 = arr[4] // index = (n - k + i) % n = 5 - 2 + 1 = 4 % 5 = 4
 * result[2] = 1 = arr[0] // index = (n - k + i) % n = 5 - 2 + 2 = 5 % 5 = 0
 * result[3] = 2 = arr[1] // index = 6 % 5 = 1
 * result[4] = 3 = arr[2] // index = 7 % 5 = 2
 */
