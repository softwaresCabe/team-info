// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {

    constructor(name, id, email, school){
        super(name)
        super(id);
        super(email);
        this.school = school;
    }

    getRole(){
        return Intern.name;
    }

    getSchool(){
        return this.school;
    }


}