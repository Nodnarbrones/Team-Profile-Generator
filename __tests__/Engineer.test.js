const Engineer = require("../lib/Engineer");

test("can create github using constructor arguments", () => {
    const engineer = 'githubName';
    const e = new Engineer('Darth',666,'empirerulez@empire.com',engineer);
    expect(e.github).toBe(engineer);
});

test("Can get Github username via getGithub()", () => {
    const engineer = 'githubName';
    const e = new Engineer('Darth',66,'empirerulezzz@empire.com',engineer);
    expect(e.getGithub()).toBe(engineer);
});

test("getRole() should return Engineer", () => {
    const engineer = 'Engineer';
    const e = new Engineer('Dart',66,'empirerulezzz@empire.com',engineer);
    expect(e.getRole()).toBe(engineer);
})