abstract class Human{
abstract name:string;

display():void{
    console.log(this.name);
}
}

class Employee extends Human{
name:string;
empID:number;

constructor(name:string,code:number){
    super();                                     //for calling parent class
    
    this.empID=code;
    this.name=name;
}
}

let emp:Human=new Employee("Divya",1);
emp.display();