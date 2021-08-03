// Version with types
type Admin = {
    name: string;
    privileges: string [];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

// // Version with interfaces
// interface Admin  {
//     name: string;
//     privileges: string [];
// };
//
// interface Employee  {
//     name: string;
//     startDate: Date;
// };
//
// interface ElevatedEmployee extends Employee, Admin {
//
// }

// Combining primitive types
// type Combined = string | number;
// type Numeric = number | boolean;
// type Universal = Combined & Numeric; // The type of Universal will be number, due to its intersection



