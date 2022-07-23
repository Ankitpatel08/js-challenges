const calculateEven = num => num / 2;

const calculateOdd = num => 3 * num + 1;

let count = 0;
const countArray = [];

const sequence = num => {
    count += 1;
    countArray.push({
        count, num
    });

    num = (num % 2 == 0) ? calculateEven(num) : calculateOdd(num);

    if (num !== 1) {
        sequence(num);
    } else {
        countArray.push({
            count, num: 1
        });
    }
}

sequence(Number.MAX_VALUE);
console.log(countArray);