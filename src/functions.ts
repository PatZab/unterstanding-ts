// @ts-ignore
function printResult(num: number): void {
    console.log('Result: ' + num );
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result)
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});

// @ts-ignore
printResult(add(5, 12))

let combineValues: (a: number, b: number) => number;




