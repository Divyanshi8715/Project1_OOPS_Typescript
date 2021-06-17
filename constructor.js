var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Person = function () {
        this.firstName = " ";
        this.lastName = " ";
    };
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.firstName = "Divyanshi";
aPerson.lastName = "Jain";
console.log(aPerson.fullName());
