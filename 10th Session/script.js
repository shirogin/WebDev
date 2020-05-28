var Name=document.querySelector('input[name="Name"]'),
    Age=document.querySelector('input[name="Age"]'),
    Image=document.querySelector('input[name="Image"]');
Name.addEventListener("keyup",function(event){
    if(!Name.value.match(/([A-Z])\w+/g)){
        Name.classList.add("error")
    }else{
        Name.classList.remove("error")
    }
});
Age.addEventListener("focusin",function(){
    Age.classList.add("blueBor");
});
Age.addEventListener("focusout",function(){
    Age.classList.remove("blueBor");
});
document.querySelector("#PImage").addEventListener("click",function(event){
    if(Image.value!==""){
        var image=document.createElement("img");
        image.src=Image.value;
        document.querySelector("form").append(image);
    }
});
