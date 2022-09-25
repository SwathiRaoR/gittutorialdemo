console.dir(document);
console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title=123456;

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='hello';

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

console.log(document.getElementById("header-title"));
var headertitle=document.getElementById("header-title");
console.log(headertitle.textContent);
//headertitle.textcontent="hello";
console.log(headertitle.innerText);
headertitle.innerHTML='<h3>hello</h3>';
headertitle.style.borderBottom='solid 3px #000';
var header=document.getElementById("main-header");
header.style.borderBottom=('solid 3px #000');

var nn=document.all[14];
var k=nn.innerHTML='<h3 style="text-transform:uppercase; color:green ">add items</h3>';

