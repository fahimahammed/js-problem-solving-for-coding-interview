// Find Intersection of Two Arrays
// Write a function that takes two arrays and returns a new array with the common elements (intersection) between the two arrays.
// Example: findIntersection([1, 2, 3], [2, 3, 4]) → [2, 3]

function findIntersection(arr1, arr2) {
    const result = arr1.filter(num => arr2.includes(num));
    console.log(result);
}
findIntersection([1, 2, 3], [6, 3, 4, 5])
/**
 * arr1 = [1, 2, 3]
 * arr2 = [2, 3, 4, 5]
 * r = [2, 3]
 * 
 * 1 x
 * 2 
 * 3
 */