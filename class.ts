class Employee{
    empID:number;
    empName: string;

    constructor(code:number,name:string){
        this.empID=code;
this.empName=name;
    }

    getSalary():number{
        return 15000;
        

    }
}