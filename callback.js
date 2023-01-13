const posts=[
    {title:'post one',body:'this is post one',createdat:new Date().getTime()},
    {title:'post two',body:'this is post two',createdat:new Date().getTime()}
];
let intervalid;

function getpost(){
    clearInterval(intervalid);
   intervalid= setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++)
       {
            output+=`<li>${posts[i].title}-last updated${((new Date().getTime()-posts[i].createdat)/1000 )}seconds ago</li>`;
        };
        document.body.innerHTML=output;
    },1000);
}
function createpost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdat:new Date().getTime()});
        callback();
    },2000);
}
function create4post(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdat:new Date().getTime()});
        callback();
    },2000);
}
createpost({title:'post three',body:'this is post three'},getpost);
create4post(
{title:'post four',body:'this is post four'},getpost);