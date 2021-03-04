const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

    newEmployeeCard(){
        return `<div class="card">
        <div class="card-header bg-primary text-light">
            <h2>${this.name}</h2>
            <h4>Engineer</h4>
        </div>
        <div class="card-body" style="background-color: #D8D8D8;">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${this.github}">${this.github}</li>
            </ul>
        </div>
    </div>`;
    }
}

module.exports = Engineer;