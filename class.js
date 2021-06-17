var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empID = code;
        this.empName = name;
    }
    Employee.prototype.getSalary = function () {
        return 15000;
        console.log(15000);
    };
    return Employee;
}());
