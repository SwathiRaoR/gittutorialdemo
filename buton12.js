var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');


form.addEventListener('submit',additem)
itemlist.addEventListener('click',removeitem)
filter.addEventListener('keyup',filteritem)

function additem(e)
{
    e.preventDefault();
    //console.log(1);
    var newitem=document.getElementById('item').value;
    //console.log(newitem);
    //create new li
    var li=document.createElement('li');
    //add class
    li.className=('list-group-item');
    console.log(li);
    li.appendChild(document.createTextNode(newitem));
    var description=document.getElementById('description').value;
 li.appendChild(document.createTextNode(description));
 //console.log(li);
//create delete button
var delbtn=document.createElement('button');
delbtn.className='btn btn-danger btn-sm float-right delete';
delbtn.appendChild(document.createTextNode('x'));
var editbtn=document.createElement('button');
editbtn.className='float-right edbutton';
editbtn.style.backgroundColor="light-grey";
editbtn.appendChild(document.createTextNode('edit'));
li.appendChild(delbtn);
li.appendChild(editbtn);
itemlist.appendChild(li);
}
function removeitem(e)
{
  if(e.target.classList.contains('delete'))
  {

      if(confirm('are you sure?'))
      {
          var li=e.target.parentElement;
          itemlist.removeChild(li);
     }
  }
}
function filteritem(e){
  var text=e.target.value.toLowerCase();
 // console.log(text);
 var items= itemlist.getElementsByTagName('li');
 //console.log(items);
 Array.from(items).forEach(function(item)
 {
  var itemname=item.firstChild.textContent;
  var description=item.childNodes[1].textContent;
 // console.log(itemname);
 console.log(description);
 var x=description.toLowerCase().indexOf(text)!=-1;
 var y=itemname.toLowerCase().indexOf(text)!=-1;
  if(y|| x)
  {
    item.style.display='block';
  }
  else
  {
    item.style.display='none';
  }
 });
}
