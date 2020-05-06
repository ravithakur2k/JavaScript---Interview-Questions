// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let result = 1;
//     let arrayResults = [0,1];
  
//     for(let i = 2; i<= n; i++){
//         result += arrayResults[i-2]
//         arrayResults.push(result);
//     }
//     console.log(arrayResults);
//     return arrayResults[n];
// }

function memoize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function fib(n) {
    // we can use this as well
    // if(n < 2){
    //     return n
    // }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;

