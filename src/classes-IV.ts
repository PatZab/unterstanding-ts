// // Creating a class
// class Department {
//     // This is the usual way to do it
//     // private readonly id: string;
//     // private name: string;
//     private employees: string[] = [];
//
//     constructor(private readonly id: string, public name: string) { // A shortcut for the initialization for properties
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
// // // Verbose version of class Definition
// class ITDepartment extends Department{
//     admins: string[];
//
//     constructor(id: string, admins: string[]) {
//         super(id, 'IT');
//         this.admins = admins;
//     }
// }
//
// class AccountingDepartment extends Department {
//
//     private lastReport: string;
//
//     // A Getter Method with the "get" keyword.
//     get mostRecentReport() {
//         if (this.lastReport) {
//             return this.lastReport;
//         }
//         throw new Error('No report found.')
//     }
//
//     set mostRecentReport(value: string) {
//         this.addReport(value);
//     }
//
//     constructor(id: string, private reports: string[]) {
//         super(id, 'Accounting');
//         this.lastReport = reports[0];
//     }
//
//     addReport(text: string) {
//         this.reports.push(text);
//         this.lastReport = text;
//     }
//
//     printReports() {
//         console.log(this.reports);
//     }
//
// }
//
// // Shorthand version
// // class ITDepartment extends Department{
// //     constructor(id: string, public admins: string[]) {
// //         super(id, 'IT');
// //     }
// // }
//
// // Creating an instance of the class of Department
// const accounting = new AccountingDepartment('d1', []);
// accounting.addReport('Something went wrong!...');
// accounting.printReports();
//
// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
//
// accounting.printEmployeeInformation();
// accounting.describe();
//
// const itDepartment = new ITDepartment('d2', ['Max']);
// console.log(itDepartment);
//
// // Getters are accessed as a property not as methods
// console.log(accounting.mostRecentReport);
//
// accounting.mostRecentReport = 'Hello';
