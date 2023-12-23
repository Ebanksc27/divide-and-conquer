function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if mid is the point of rotation
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid;
        }

        // Check if mid+1 is the point of rotation
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid + 1;
        }

        // Decide which half to search next
        if (arr[start] < arr[mid]) {
            // Left half is sorted, so the rotation point is in the right half
            start = mid + 1;
        } else {
            // Right half is sorted, so the rotation point is in the left half
            end = mid - 1;
        }
    }

    // If the array is not rotated
    return 0;
}


module.exports = findRotationCount