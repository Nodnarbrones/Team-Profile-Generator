const Intern = require('../lib/Intern');

test("can create school using constructor arguments", () => {
    const intern = 'school';
    const I = new Intern('Darth',666,'empirerulez@empire.com',intern);
    expect(I.school).toBe(intern);
});

test("Can get school name via getSchool()", () => {
    const intern = 'schoolName';
    const I = new Intern('Darth',66,'empirerulezzz@empire.com',intern);
    expect(I.getSchool()).toBe(intern);
});

test("getRole() should return Intern", () => {
    const intern = 'Intern';
    const I = new Intern('Darth',66,'empirerulezzz@empire.com',intern);
    expect(I.getRole()).toBe(intern);
})