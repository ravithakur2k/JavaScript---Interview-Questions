// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0; i < arr.length; i++){
        for(let j = 0; j<(arr.length-i-1); j++){
            if(arr[j] > arr[j+1]){
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {

    for(let i = 0; i< arr.length; i++){
        let indexOfMin = i;
        for(let j=i+1; j < arr.length; j++){
           if(arr[indexOfMin] > arr[j]){
            indexOfMin = j;
           }
        }
        if(i !== indexOfMin){
            const lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;

}

// console.log(selectionSort( [100, -40, 500, -124, 0, 21, 7]));

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const results = [];
    while( left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    // while(left.length){
    //     results.push(left.shift())
    // }
    // while(right.length){
    //     results.push(right.shift());
    // }
    // return results;
    return [...results, ...left, ...right];
}

const left = [1, 10];
const right = [2, 8, 12];

merge(left, right);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
