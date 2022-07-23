// remove numbers from string
const removeNumbersFromString = (str) => {
    return str.replace(/[0-9]/g, '');
}

console.log(removeNumbersFromString('ABC123DEF'));