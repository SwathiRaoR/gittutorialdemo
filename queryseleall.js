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
