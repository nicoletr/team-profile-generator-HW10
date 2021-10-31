const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Test if office number is set correctly", () => {
    const m = new Manager("Mark", "2", "mark@gmail.com", "1");
    expect(m.officeNumber).toBe("1");
})

test("Test if getRole is working", () => {
    const m = new Manager();
    expect(m.getRole()).toBe("Manager");
})

test("Test if getOfficeNumber is working", () => {
    const m = new Manager("Catherine", "5", "catherine@gmail.com", "2");
    expect(m.getOfficeNumber()).toBe("2");
})