//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';
//var input=document.querySelector('input');
//input.value='hello world';
//var submit=document.querySelector('input[type="submit"]');
//submit.value='send';
//var item=document.querySelector('.list-group-item');
//item.style.color='red';
//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='red';
//var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor='green';
//var seconditem=document.querySelector('.list-group-item:nth-child(3)');
//seconditem.textContent=" ";
//var laitem=document.querySelector('.list-group-item:last-child');
//laitem.style.color='blue';
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello';
var lists=document.querySelectorAll('.list-group-item');
console.log(lists);
lists[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

