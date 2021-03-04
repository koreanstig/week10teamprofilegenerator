class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getEmployeeName(){
        return this.name;
    }

    getEmployeeID() {
        return this.id;
    }

    getEmployeeEmail(){
        return this.email;
    }

    getEmployee(){
        return "Employee";
    }
};

module.exports = Employee;