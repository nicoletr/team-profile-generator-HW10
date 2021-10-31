const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Test if Employee creates an object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
})

test("Test if name is set properly", () => {
    const e = new Employee("John");
    expect(e.name).toBe("John");
})

test("Test if id is set properly", () => {
    const e = new Employee("John", "56");
    expect(e.id).toBe("56");
})

test("Test if email is set properly", () => {
    const e = new Employee("Mark", "25", "mark@gmail.com");
    expect(e.email).toBe("mark@gmail.com");
})

test("Test if getName is working", () => {
    const e = new Employee("Lisa");
    expect(e.getName()).toBe("Lisa");
})

test("Test if getId is working", () => {
    const e = new Employee("Rachel", "4");
    expect(e.getId()).toBe("4");
})

test("Test if getEmail is working", () => {
    const e = new Employee("Tom", "17", "tom@gmail.com");
    expect(e.getEmail()).toBe("tom@gmail.com");
})

test("Test if getRole is working", () => {
    const e = new Employee();
    expect(e.getRole()).toBe('Employee');
})