let total=0;
let count=0;
let studentobj = {
'yash':26,
'vaibhav':24,
'rajesh' : 25,
	}
	let age=Object.values(studentobj);
	 
var avg=console.log(findaverageage(age));
    
function findaverageage(studentobj){
    age.forEach((ag) => {
total = total+ag;
count++;
});
avg=total/count;
return avg;
}