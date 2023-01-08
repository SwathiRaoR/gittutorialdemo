class student{
    static count=0;
    constructor(name,age,phno,mark){
        this.name=name;
        this.age=age;
        this.phno=phno;
        this.mark=mark;
        student.countstudent();
        }
        
 static countstudent(){
 return(student.count++); }

eligible(){
    if(this.mark>=40){
        console.log(`${this.name} is eligible`);
    }
    else {
        console.log(`${this.name} is not eligible`);
    }
}
}

const jill=new student('jill',28,123,4);
const john=new student('john',12,12,40);
const jai=new student('jai',21,234,30);
const ram=new student('ram',25,123,41);
const shan=new student('shan',22,128,40);
console.log(student.countstudent());
 jill.eligible();
 