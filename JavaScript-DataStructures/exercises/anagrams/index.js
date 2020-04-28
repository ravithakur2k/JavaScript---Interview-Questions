// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


console.log(anagrams('RAIL9! SAFETY!', 'fairy tales'));

function anagrams(stringA, stringB) {
    const newStrA = stringA.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
    const newStrB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return newStrA === newStrB;
}



module.exports = anagrams;




// function anagrams(stringA, stringB) {
//     const newObjA = strToObj(stringA);
//     const newObjB = strToObj(stringB);
//     if(Object.keys(newObjA).length !== Object.keys(newObjB).length){
//         return false;
//     }
//     for(let char in newObjA){
//         if(newObjA[char] !== newObjB[char]){
//             return false;
//         }
//     }
//     return true;
// }

// function strToObj(str){
//     let newStr = str.replace(/[^\w]/g,'')
//     .toLowerCase();
//     console.log(newStr);
//     let chars = {}
//     for(let element of newStr){
//         chars[element] = chars[element] + 1 || 1;
//     }
//     return chars;
// }