const Employee = require('../lib/Employee');

test('Institutes an instance of Employee',() => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Sets name via constructor arguments',() => {
    const name = 'Name';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

