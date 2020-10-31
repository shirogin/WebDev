const AddButton=document.querySelector(".Todo .head div"),
    ToDoInput=document.querySelector(".Todo input"),
    Todo=document.querySelector(".Todo ul");
var TodoTrash=document.querySelectorAll(".Todo ul div");

AddButton.addEventListener("click",function(){
    ToDoInput.classList.toggle("hide");
});

function removeItem(){
    this.parentElement.remove();
    //a remove request with ToDo Id    
}
TodoTrash.forEach(el=>{
    el.addEventListener("click",removeItem)
});

ToDoInput.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        //request creating note with ToDoInput.value
    }
});


