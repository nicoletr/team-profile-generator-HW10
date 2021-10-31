const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Test if School is set correctly", () => {
    const i = new Intern("Joy", "789", "joy@gmail.com", "UWA");
    expect(i.school).toBe("UWA");
})

test("Test if getRole is working", () => {
    const i = new Intern();
    expect(i.getRole()).toBe("Intern");
})

test("Test if getSchool is working", () => {
    const i = new Intern("Steve", "98", "steve@gmail.com", "Curtin");
    expect(i.getSchool()).toBe("Curtin");
})