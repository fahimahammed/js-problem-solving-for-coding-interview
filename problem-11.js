// Merge Two Sorted Arrays
// Write a function that merges two sorted arrays into one sorted array.
// Example: mergeSortedArrays([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j])
            j++;
        }
    }


    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    console.log(result)
}

mergeSortedArrays([1, 3, 5, 8, 9, 10], [2, 4, 6, 7])