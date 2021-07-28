"use strict";
// @ts-ignore
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
// @ts-ignore
printResult(add(5, 12));
let combineValues;
