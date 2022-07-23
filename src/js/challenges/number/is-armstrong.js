// Armstrong number : 153 == 1^3 + 5^3 + 3 ^3
const isArmstrong = (num) => {
    let numString = num.toString();
    let strLen = numString.length;
    let sum = 0;

    for (let i = 0; i < strLen ; i++) {
        sum += Math.pow(numString[i], strLen);
    }

    return num === sum;
}