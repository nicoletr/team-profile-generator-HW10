const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Test if Github is set correctly", () => {
    const e = new Engineer("Lauren", "5", "lauren@gmail.com", "lozza");
    expect(e.github).toBe("lozza");
})

test("Test if getRole is working", () => {
    const e = new Engineer();
    expect(e.getRole()).toBe('Engineer');
})

test("Test if getGithub is working", () => {
    const e = new Engineer("Ben", "68", "ben@gmail.com", "benEb");
    expect(e.getGithub()).toBe('benEb');
})