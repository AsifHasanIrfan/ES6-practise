class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Kalabari Ramnagor High School.'
    }
}

const student1 = new Student(12, 'asif');
const student2 = new Student(25, 'sawon');
console.log(student1, student2);