interface Greetable {
    name: string;

    greet(phrase: string): void;
}

// More than one interface could be implemented by seperating them with colons.
class Person implements Greetable{
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase);
    }
}


let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi ther I am');

