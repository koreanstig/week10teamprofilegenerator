const Intern = require("../lib/intern");

describe("Intern class", () =>{
    it("Can set the name, id, and email of the Intern", () => {
        const test = new Intern("David", 0, "anon@yahoo.com", "UW Bootcamp");
        expect(test.name).toEqual("David");
        expect(test.id).toEqual(0);
        expect(test.email).toEqual("anon@yahoo.com");
    });

    describe("getSchool", () => {
        it("returns the github account", ()=>{
            const school = "UW Bootcamp";
            const test = new Intern("David", 0, "anon@yahoo.com", "UW Bootcamp");
            expect(test.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("returns Intern", ()=>{
            const role = "Intern";
            const test = new Intern("David", 0, "anon@yahoo.com", "UW Bootcamp");
            expect(test.getRole()).toBe(role);
        });
    });
});