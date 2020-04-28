// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}
    let arr = str.split('');
    arr.forEach(element => {
        if(element in obj){
            obj[element] = obj[element] + 1;
        }else {
            obj[element] = 1;
        }
    });
    // let max = 0;
    // let maxKey = '';
    // for(const key in obj){
    //     if(key !== " "){
    //         if(obj[key] >= max){
    //             max = obj[key];
    //             maxKey = key;
    //         }
    //     }
    // }
    // return maxKey;
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

console.log(maxChar("abbbccd"));


module.exports = maxChar;
