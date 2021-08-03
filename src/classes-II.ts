// // Creating a class
// class Department {
//     // This is the usual way to do it
//     // private id: string;
//     // private name: string;
//     private employees: string[] = [];
//
//     constructor(private id: string, public name: string) { // A shortcut for the initialization for properties
//         // this.id = id;
//         // this.name = n;
//
//     }
//
//     describe(this: Department) { // The "this" in the arguments list is for TypeScript
//         // "this" refers to this specific object. Without "this" it would refer to an global variable
//         // or one inside the method
//         console.log(`Department (${this.id}): ${this.name}`);
//
//     }
//
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
//
// // Creating an instance of the class of Department
// const accounting = new Department('d1', 'Accounting');
//
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
//
// accounting.printEmployeeInformation();
// accounting.describe();
// //
// // console.log("Department Name: " + accounting.name)
//
// // const accountinCopy = {describe: accounting.describe()}
// // accountinCopy.describe();