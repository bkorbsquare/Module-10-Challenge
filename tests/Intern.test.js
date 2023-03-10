const Intern = require ('../lib/Intern');

test ('Sets School via constructor', () => {
    const testValue = 'school';
    const e = new Intern('Foo', 1, 'school', testValue);
    expect(e.school).toBe(testValue);
});

test ('getRole () should return \'Intern\'', () => {
    const testValue = 'Intern';
    const e = new Intern ('Foo', 1, 'school',);
    expect (e.getRole()).toBe(testValue);
});

test ('Gets school via getSchool()', () => {
    const testValue = 'School';
    const e = new Intern ('Foo', 1, 'school', testValue);
    expect (e.getSchool()).toBe(testValue);
});