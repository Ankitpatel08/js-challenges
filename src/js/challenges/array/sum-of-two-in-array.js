const sumOfTwoInArrayBF = (nums, target) => {
    let sum = 0;

    for (let i = 0; i <= nums.length; i++) {
        for (let j = i+1; j <= nums.length - 1; j++) {
            sum = nums[i] + nums[j];

            if (sum == target) {
                return [i, j];
            }
        }
    }
}

let resultArrayBF = sumOfTwoInArrayBF([6, 7, 9, 0, 2], 13);

console.log(resultArrayBF);

const sumOfTwoInArray = (nums, target) => {
    let valueMap = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (valueMap[target - n] >= 0) {
            return [valueMap[target - n] , i]
        } else {
            valueMap[n] = i;
        }
    }
}

let resultArray = sumOfTwoInArray([2, 6, 7, 9, 0], 11);

console.log(resultArray);