//  make a first letter uppercase
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log('Capitalize:: ', capitalize('test test'));