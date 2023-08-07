"use strict";

function fibs(n) {
  let fibsArr = [];
  let n1 = -1;
  let n2 = 1;
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
      sum = n1 + n2;
      fibsArr.push(sum);
      n1 = n2;
      n2 = sum;  
    }
  return fibsArr;
}
  
 console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
 console.log(fibs(0)); // []
 console.log(fibs(1)); // [0]
 console.log(fibs(2)); // [0, 1]


function fibsRec(n) {
    if (n === 0) return [];
    if (n === 1) return [0]
    if (n === 2) return [0, 1]
   
    let fibsArrRec = fibsRec(n - 1);
    fibsArrRec.push(fibsArrRec[fibsArrRec.length - 1] + fibsArrRec[fibsArrRec.length - 2]);
    return fibsArrRec;
}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
