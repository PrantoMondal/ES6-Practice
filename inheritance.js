class Parent{

    constructor(){
        this.fathername = "vivek";
    }

}
class child  extends Parent{

    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name+ " " + this.fathername
    }
}
const baby1 = new child("tom")
const baby2 = new child("jerry");

console.log(baby1.getFullName());
console.log(baby2.getFullName());