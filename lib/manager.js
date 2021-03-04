const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    newEmployeeCard(){
        return `<div class="card">
        <div class="card-header bg-primary text-light">
            <h2>${this.name}</h2>
            <h4>Manager</h4>
        </div>
        <div class="card-body" style="background-color: #D8D8D8;">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office Number: ${this.officeNumber}</li>
            </ul>
        </div>
    </div>`;
    }
}

module.exports = Manager;