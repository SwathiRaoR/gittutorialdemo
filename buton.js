var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');


form.addEventListener('submit',additem)
itemlist.addEventListener('click',removeitem)


function additem(e)
{
    e.preventDefault();
    //console.log(1);
    var newitem=document.getElementById('item').value;
    console.log(newitem);
    //create new li
    var li=document.createElement('li');
    //add class
    li.className=('list-group-item');
    console.log(li);
    li.appendChild(document.createTextNode(newitem));
    //create delete button
var delbtn=document.createElement('button');
delbtn.className='btn btn-danger btn-sm float-right delete';
delbtn.appendChild(document.createTextNode('x'));
var editbtn=document.createElement('button');
editbtn.className='btn btn-danger btn-sm float-right delete';
editbtn.appendChild(document.createTextNode('edit'));

li.appendChild(editbtn);
li.appendChild(delbtn);


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
