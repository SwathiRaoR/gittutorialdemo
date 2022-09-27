var itemlist=document.querySelector('#items');
//parentnode
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor='red';
//console.log(itemlist.parentNode.parentNode.parentNode);

//parent-element
//console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor='orange';
//console.log(itemlist.parentElement.parentElement.parentElement);

//child-nodes
//console.log(itemlist.childNodes);

//console.log(itemlist.children);
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor='yellow';

//firstchild
//console.log(itemlist.firstChild);
//first-element child
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='hello1';

//lastchild
//console.log(itemlist.lastChild);
//first-element child
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent='hello4';

//next-sibling
//console.log(itemlist.nextSibling);
//next-element sibling
//console.log(itemlist.nextElementSibling);

//previous-sibling
//console.log(itemlist.previousSibling);
//next-element sibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color='green';

//create-element
//create a div
var newdiv=document.createElement('div');
//add-class
newdiv.className='hello';

//add-id
newdiv.id='hello1';

//add-attribute
newdiv.setAttribute('title','hellodiv');
//console.log(newdiv);

//create-textnode
var newdivtext=document.createTextNode('hello world');

//add text to div
newdiv.appendChild(newdivtext);
//console.log(newdiv);

//var container=document.querySelector('header .container');
//var h1=document.querySelector('header h1');

//container.insertBefore(newdiv,h1);

//console.log(newdiv);
var contain=document.getElementById("items");
contain.innerHTML='hello'+contain.innerHTML;



console.log(contain);



var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.innerHTML='hello world'+container.innerHTML;

//console.log(container);



















