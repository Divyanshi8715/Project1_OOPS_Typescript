class Person{
    firstName:string;
    lastName:string;

    Person(){                                   //In JS,TS constructor can ne call using class name or using constructor() method too.     
        this.firstName=" ";
        this.lastName=" ";
    }
    fullName(){
        return this.firstName +" "+this.lastName;
    }
}

var aPerson=new Person();
aPerson.firstName="Divyanshi";
aPerson.lastName="Jain";

console.log(aPerson.fullName());