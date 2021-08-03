interface ErrorContainer {
    [prop: string]: string; //It demands a key with the type of string.
    // keys or properties are not limited to a specific number
}

const errorBag: ErrorContainer = {
    email: 'Not a valide email!',
    username: 'Must start with a capital character!'
};