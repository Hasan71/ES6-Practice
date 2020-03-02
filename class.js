class student {

    constructor(sId, sName){
        // this.id = 16151011;
        // this.name = "Hasan";
        this.id = sId;
        this.name = sName;
        this.Varsity = "UITS";
    }

}

const student1 = new student(16151011, "Hasan");
const student2 = new student(16151001, "Ela");

console.log(student1.id, student2.Varsity);
