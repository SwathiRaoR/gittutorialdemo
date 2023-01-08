class students{
    
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
         }
    setplacementage(minage){
        console.log(this);
        return (minmarks)=>{
            console.log('inside eligible current company',this)
            if(this.marks>minmarks && this.age>minage){
                console.log(this.name+"is ready for placement")
            }
            else 
            {
                console.log(this.name+"is not ready for placement")
            }
        }
    }
    }
const jil=new students('jill',28,123);
const jon=new students('jon',12,12);
const jay=new student('jo',21,23);
const raam=new students('rama',25,12);
const shaan=new students('shama',22,40);


 jil.setplacementage(18)(40);
 jon.setplacementage(18)(40);
 jay.setplacementage(18)(40);
 raam.setplacementage(18)(40);
 shaan.setplacementage(18)(40);