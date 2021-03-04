const Employee = require("../lib/employee");

describe("Employee class", () =>{
    it("Can set the name, id, and email of the employee", () => {
        const test = new Employee("David", 0, "anon@yahoo.com");
        expect(test.name).toEqual("David");
        expect(test.id).toEqual(0);
        expect(test.email).toEqual("anon@yahoo.com");
    });

    describe("getRole", () => {
        it("returns Employee", ()=>{
            const role = "Employee";
            const test = new Employee("David", 0, "anon@yahoo.com")
            expect(test.getRole()).toBe(role);
        });
    });
});