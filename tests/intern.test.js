const Intern = require("../lib/intern");

describe("Intern class", () =>{
    it("Can set the name, id, and email of the Intern", () => {
        const test = new Intern("David", 0, "anon@yahoo.com", );
        expect(test.name).toEqual("David");
        expect(test.id).toEqual(0);
        expect(test.email).toEqual("anon@yahoo.com");
    });

    describe("getGithub", () => {
        it("returns the github account", ()=>{
            const gitHub = "koreanstig";
            const test = new Intern("David", 0, "anon@yahoo.com", "koreanstig");
            expect(test.getGithub()).toBe(gitHub);
        });
    });

    describe("getRole", () => {
        it("returns Engineer", ()=>{
            const role = "Engineer";
            const test = new Intern("David", 0, "anon@yahoo.com");
            expect(test.getRole()).toBe(role);
        });
    });
});