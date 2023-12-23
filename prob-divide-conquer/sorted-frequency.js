function sortedFrequency(arr, num) {
    // Function to find the first occurrence of num
    function findFirst() {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] < num) low = mid + 1;
            else if (arr[mid] === num && (mid === 0 || arr[mid - 1] < num)) return mid;
            else high = mid - 1;
        }
        return -1;
    }

    // Function to find the last occurrence of num
    function findLast() {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] > num) high = mid - 1;
            else if (arr[mid] === num && (mid === arr.length - 1 || arr[mid + 1] > num)) return mid;
            else low = mid + 1;
        }
        return -1;
    }

    // Find the first and last occurrences
    const first = findFirst();
    const last = findLast();

    // If the number is not found, return -1
    if (first === -1 || last === -1) return -1;

    // Return the frequency
    return last - first +1;

}

module.exports = sortedFrequency