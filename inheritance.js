class Parent{
    constructor(){
        this.fatherName = "bulldog"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child('tom');
const baby2 = new Child('jerry');
console.log(baby2);
console.log(baby.getFullName());
