interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let username = { firstName: 'Luke', lastName: 'Skywalker' };

document.body.textContent = greeter(username);