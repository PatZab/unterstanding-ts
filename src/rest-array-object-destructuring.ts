// Rest operater for taking any number of arguments
const add = (...numbers: number[]) => {
    let sum: number = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers); // 20.7

// ARRAY DESTRUCTURING
// Creating a normal array of hobbies
const hobbies = ['Sports', 'Chess', 'Lego', 'Programming'];

// Destructuring the hobbies array. The first element goes into hobby1, the second into hobby2.
// All remaining hobby items go into the rest ...remainingHobbies
const [hobby1, hobby2, ...remainigHobbies] = hobbies;

// Destructuring does not alter or delete the original array.

// OBJECT DESTRUCTURING
// Creating a normal Object
const citizen = {
    firstname: 'Paddy',
    age: 29,
    hobbies: hobbies
}

// The same thing like for an array happens here.
const {firstname, age, ...remaining} = citizen;


