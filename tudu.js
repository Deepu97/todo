const listdata=document.getElementById("select");
function fun(){
    if(inp.value==""){
        alert("Write something")
    }
    else{
const li=document.createElement("li");
li.innerHTML=inp.value;
li.className="list";
document.getElementById("select").appendChild(li);
const span=document.createElement('span');
span.innerHTML="\u00d7";
span.id="span1";
li.appendChild(span);
    }
    setdata();
}
let list_items=document.getElementById("select");
list_items.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        setdata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        setdata();
    }

},false)
function setdata(){
    localStorage.setItem("data",listdata.innerHTML)
}
function showtask(){
    listdata.innerHTML=localStorage.getItem("data")
}
showtask();