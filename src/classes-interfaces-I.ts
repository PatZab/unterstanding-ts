// // Creating a class
// class Department {
//     name: string;
//
//     constructor(n: string) {
//         this.name = n;
//     }
//
//     describe(this: Department) { // The "this" in the arguments list is for TypeScript
//         // "this" refers to this specific object. Without "this" it would refer to an global variable
//         // or one inside the method
//         console.log('Department: ' + this.name);
//     }
// }
//
// // Creating an instance of the class of Department
// const accounting = new Department('Accounting')
//
// accounting.describe();
//
// console.log("Department Name: " + accounting.name)
//
// // const accountinCopy = {describe: accounting.describe()}
// // accountinCopy.describe();