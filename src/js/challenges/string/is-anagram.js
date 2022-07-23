// Anagram strings | takes 2 strings, if anagram of each other, returns true
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.split('').sort();
    let sortedStr2 = str2.split('').sort();

    return sortedStr1.join('') === sortedStr2.join('');
};

console.log('is Anagram Strings :: ', isAnagram('ankit', 'kitan'));
console.log('is Anagram Strings :: ', isAnagram('ankit', 'kiran'));