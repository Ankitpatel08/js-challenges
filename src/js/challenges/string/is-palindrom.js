// Palindrom String : takes string, returns boolean
const isPalindrom = (str) => {
    let tempStr = str;
    let reverseStr = str.split('').reverse().join('');

    return (tempStr === reverseStr);
}

console.log('isPalindrom :: ababa ', isPalindrom('ababa'));
console.log('isPalindrom :: Ankit ', isPalindrom('Ankit'));
