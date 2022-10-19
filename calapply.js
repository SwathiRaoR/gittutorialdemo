//1
var obj={num:20};
var addtothis=function(a){
    return this.num+a;
}
console.log(addtothis.call(obj,1));
//2
var obj={num:20}
var addtothis=function(a,b,c){
  return this.num+a+b+c;
}
var arr=[1,2,3];
console.log(addtothis.apply(obj,arr));

//3
var obj={num:20};
var addtothis=function(a,b,c){
  return this.num+a+b+c;}
var bound=(addtothis.bind(obj));
console.log(bound(1,2,3));

//4
var student={
    age:20
  }
  var print=function(){
      return this.age;
  }
  var bound=print.bind(student);
  console.log("age of student is"+ bound());
