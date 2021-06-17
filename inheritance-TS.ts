class Person1{
    firstName: string;
    lastName: string;
    greet(){
        console.log("Hello.....");
    }
}

class Programmer1 extends Person1{
    greet(){                                           //First I compiled without these 2 lines that is why it is showing "Hello...".
        console.log("Hii There....");
    }
}

var prog=new Programmer1();
prog.greet();