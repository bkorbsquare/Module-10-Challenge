const Manager = require ('../lib/Manager');

test ('Sets Office Number via constructor', () => {
    const testValue = 'OfficeNumber';
    const m = new Manager ('Boo', 1, 'test@test.com', testValue);
    expect(e.github).toBe(testValue);
});

test ('getRole () should return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const m = new Manager ('Boo', 1, 'test@test.com', 'GithubUser');
    expect (e.getRole()).toBe(testValue);
});

test ('Gets Office Number via getOfficeNumber()', () => {
    const testValue = 'OfficeNumber';
    const m = new Manager ('Boo', 1, 'test@test.com', testValue);
    expect (e.getGithub()).toBe(testValue);
});