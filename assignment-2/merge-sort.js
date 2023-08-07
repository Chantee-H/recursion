"use strict";

function merge(left, right){
    let array = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            array.push(left.shift())
        }else {
            array.push(right.shift())
        }
    }
    return [...array, ...left, ...right];
}

function mergeSort(arr){
    const arrHalf = arr.length / 2;

    if(arr.length < 2){
        return arr;
    }

    const left = arr.splice(0, arrHalf);
    return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([9, 6, 7, 3, 4, 2, 5, 1, 8])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]