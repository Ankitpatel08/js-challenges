const isArraySorted = (arr, n) => {
    if (n == 1) {
        return 1;
    } else {
        return (arr[n-2] < arr[n-1]) ? 0 : isArraySorted(arr, n-1);
    }
}

console.log(isArraySorted[4,3,2], 3);
console.log(isArraySorted(3,2,5,1), 4);