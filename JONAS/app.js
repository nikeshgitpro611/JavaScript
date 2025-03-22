const privateData = new WeakMap();
console.log('privateData : ', privateData);
class empDetails {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        privateData.set(this, {salary, name});
        
    }

    getSalary () {
        return privateData.get(this);
    }
}

const AssignedEmp = new empDetails('Raj', 10000);
console.log('AssignedEmp : ', AssignedEmp);
console.log('AssignedEmp.getSalry() : ', AssignedEmp.getSalary());
