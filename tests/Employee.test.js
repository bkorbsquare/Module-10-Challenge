const Employee = require('../lib/Employee');

test('Initiates an instance of Employee',() => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Sets name via constructor arguments',() => {
    const name = 'Name';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Sets id via cunstructor argument', () => {
    const testValue = 100;
    const e = new Employee('Boo', testValue);
    expect(e.id).toBe(testValue);
});

test('sets email via constructor argument', () => {
    const testValue = 'name@email.com';
    const e = new Employee('Boo', 0, testValue);
    expect(e.email).toBe(testValue);
});

test('gets name via getName()', () => {
    const testValue = 'Name';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('gets id via getId()', () => {
    const testValue = '100';
    const e = new Employee('Boo', testValue);
    expect(e.getId()).toBe(testValue);
});

test('gets email via getEmail()', () => {
    const testValue = 'name@email.com';
    const e = new Employee('Boo', 0, testValue);
    expect(e.getEmail()).toBe(testValue);
});

