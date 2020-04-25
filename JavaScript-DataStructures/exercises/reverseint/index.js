// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n){
    const result = n.toString().split('').reverse().join('');
    return parseInt(result) * Math.sign(n);
}
console.log(reverseInt(-90));

module.exports = reverseInt;

// function reverseInt(n) {
//     let m = n;
//     if (m < 0) {
//         n = n * -1;
//     }
//     let result = 0;
//     while (n > 0) {
//         result = (result * 10) + (n % 10);
//         n = parseInt(n / 10);
//     }
//     if (m < 0) {

//         return result * -1;
//     }
//     return result;
// }


// My Solution
// function reverseInt(n) {
//     if(n === 0){
//         return 0;
//     }
//     let reversedInt;
//     let m = n;
//     if (m < 0) {
//         n = -1 * n;
//     }
//     let intArr = [];
//     while (n > 0) {
//         intArr.push(n % 10);
//         n = parseInt(n / 10);
//     }
//     reversedInt = parseInt(intArr.join(''));
//     if (m < 0) {
//         return reversedInt * -1;
//     } else {
//         return reversedInt;
//     }
// }

