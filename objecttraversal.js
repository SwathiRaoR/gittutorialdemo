console.log("Welcome to Programiz!");
let total=0;
let count=0;
let avg=0;
let studentobj = {
'yash':26,
'vaibhav':24,
'rajesh' : 25,
	}
let age=Object.values(studentobj);
age.forEach((ag) => {
total = total+ag;
count++;
});
console.log(total);
avg=Math.floor(total/count);
console.log(avg);