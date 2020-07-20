// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name)
        super(id);
        super(email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return Manager.name;
    }

    getOffice(){
        return this.officeNumber;
    }

}