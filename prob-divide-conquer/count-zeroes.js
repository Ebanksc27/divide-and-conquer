function countZeroes(arr) {
    // Check for edge cases: empty array or no zeroes in the array 
    if (arr.length === 0 || arr[arr.length - 1] === 1) {
        return 0;
    }

    // Initialize two pointers: 'low' at the start and 'high' at the end of the array
    let low = 0;
    let high = arr.length - 1;

    // use a while loop to perform the binary search
    while (low < high) {
        // Calculate the middle index
        let mid = Math.floor((low + high) /2);

        // If the middle element is 0, all elements after it are also 0
        // Move the 'high' pointer to 'mid' to search in the left half
        if (arr[mid] === 0) {
            high = mid;
        } else {
            // If the middle element is 1, the first 0 is in the right half
            // Move the 'low' pointer to 'mid + 1'
            low = mid + 1;
        }
    }
    
    // the 'low' pointer now points to the first 0 in the array
    // the number of zeroes is the total length of the array minus 'low'
    return arr.length - low;
}

module.exports = countZeroes