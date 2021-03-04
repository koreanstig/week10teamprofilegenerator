const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    internSchool(){
        return this.school;
    }

    newEmployeeCard(){
        return `<div class="card" style="width: 15rem">
        <div class="card-header bg-primary text-light">
            <h2>${this.name}</h2>
            <h4>Intern</h4>
        </div>
        <div class="card-body" style="background-color: #D8D8D8;">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">School: ${this.school}</li>
            </ul>
        </div>
    </div>`;
    }
}

module.exports = Intern;