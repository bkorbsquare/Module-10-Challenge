const Manager = require ('../lib/Manager');

test ('Sets Office Number via constructor', () => {
    const testValue = 'OfficeNumber';
    const e = new Manager ('Foo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test ('getRole () should return \'Manager\'', () => {
    const testValue = 'Manager';
    const e = new Manager ('Foo', 1, 'test@test.com', 'OfficeNumber');
    expect (e.getRole()).toBe(testValue);
});

test ('Gets Office Number via getOffice()', () => {
    const testValue = 'OfficeNumber';
    const e = new Manager ('Foo', 1, 'test@test.com', testValue);
    expect (e.getOfficeNumber()).toBe(testValue);
});