const Manager = require("../lib/manager");

describe("Manager class", () =>{
    it("Can set the name, id, and office number of the manager", () => {
        const test = new Manager("David", 0, "anon@yahoo.com", 117);
        expect(test.name).toEqual("David");
        expect(test.id).toEqual(0);
        expect(test.email).toEqual("anon@yahoo.com");
        expect(test.officeNumber).toEqual(117);
    });

    describe("getRole", () => {
        it("returns Manager", ()=>{
            const role = "Manager";
            const test = new Manager("David", 0, "anon@yahoo.com", 117);
            expect(test.getRole()).toBe(role);
        });
    });
});