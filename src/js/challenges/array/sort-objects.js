// Sort objects with given property: compare-function in sort
const sortObjects = (arr, prop) => {
    return arr.sort((a,b) => a[prop] > b[prop] ? 1 : -1);
}

console.log(sortObjects([{name: 'test', age: 20}, {name: 'quest', age: 21}, {name: 'jest', age: 27}], 'name'));