function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var username = { firstName: 'Luke', lastName: 'Skywalker' };
document.body.textContent = greeter(username);
