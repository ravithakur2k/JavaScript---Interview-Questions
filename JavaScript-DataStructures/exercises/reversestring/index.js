// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reduce((reversed,character) => {
//      return character + reversed;
//     },'')
//  }

// function reverse(str){
//  let reversed = '';
//     str.split('').map(str => {
//         reversed = str + reversed
//     })

//     return reversed;
// }

function reverse(str) {
    debugger
    let reversed = '';
    str.split('').forEach((element,index) => {
        reversed = element + reversed
        console.log("Index::",index)
    });
    return reversed;
}

// An Example
console.log(reverse("Apple!"));

module.exports = reverse;

//Last Solution
/* function reverse(str) {
    let reverseStr = '';
    for(let i=str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

//Second Solution
/*function reverse(str){
    return  str.split('').reverse().join('');
}*/

// Third Solution
/*function reverse(str) {
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
    }
    return reversed;
}*/

