const Manager = require ('../lib/Manager');

test("can create office number using constructor arguments", () => {
    const manager = 'school';
    const m = new Manager('Darth',666,'empirerulez@empire.com',manager);
    expect(m.officeNumber).toBe(manager);
});

test("Can get office number  via getofficeNumber()", () => {
    const manager = 'officeNumber';
    const m = new Manager('Darth',66,'empirerulezzz@empire.com',manager);
    expect(m.getofficeNumber()).toBe(manager);
});

test("getRole() should return Manager", () => {
    const manager = 'Manager';
    const m = new Manager('Darth',66,'empirerulezzz@empire.com',manager);
    expect(m.getRole()).toBe(manager);
})