function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if the middle element is less than or equal to x
        if (arr[mid] <= x) {
            floor = arr[mid]; // Update the floor
            start = mid + 1;  // Continue searching to the right
        } else {
            end = mid - 1; // Continue searching to the left
        }
    }

    return floor; // Return the found floor, or -1 if not found
}


module.exports = findFloor