class Person1{
    firstName: string;
    lastName: string;
    greet(){
        console.log("Hello.....");
    }
}

class Programmer1 extends Person1{
    greet(){                                           
        console.log("Hii There....");
    }

    greetagain(){
        super.greet()
    }
}

var prog: Person1=new Programmer1();
prog.greet();