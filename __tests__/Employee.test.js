const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("test if Employee creates an object", () =>{
    const e = new Employee();
    expect(typeof(e)).toBe("object");
})

test("test if name is set properly", () =>{
    const e = new Employee('John');
    expect(e.name).toBe("John");
})

test("test if id is set properly", () =>{
    const e = new Employee('John', '56');
    expect(e.id).toBe("56");
})

test("test if getName is working", () =>{
    const e = new Employee('Lisa');
    expect(e.getName()).toBe("Lisa");
})