//currying using binding
let multiply1=function(x,y){
    console.log(x*y);
}
let multiplybytwo1=multiply1.bind(this,2);
multiplybytwo1(3);
let multiplybythree1=multiply1.bind(this,3);
multiplybythree(3);

//currying using closures
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplybytwo=multiply(2);
multiplybytwo(3);
let multiplybythree=multiply(3);
multiplybythree(7);