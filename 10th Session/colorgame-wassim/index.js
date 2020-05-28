var textColor = document.querySelector('#color');

var newGame = document.querySelector('.new-game h2');
var divs = document.querySelectorAll('.box');
var answer;
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var hardDivs = document.querySelectorAll('.hide');

function createColor(){
    return{
        red:Math.floor(Math.random()*255),
        green:Math.floor(Math.random()*255),
        blue:Math.floor(Math.random()*255)
    };
}


function startGame(i){

    var color=createColor();
    var index =Math.floor(Math.random()*i);
    
    textColor.innerText =`rgb(${color.red},${color.green},${color.blue})`;
    if(i ===6){
        divs.forEach(function(div){
            var tempColor = createColor();
            div.style.backgroundColor = `rgb(${tempColor.red},${tempColor.green},${tempColor.blue})`;
        });
    }else{
        hardDivs.forEach(function(child){
            child.style.backgroundColor ='black';
            child.style.transition='all 0.5s linear';
            
         });
    }
    
    divs[index].style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
   answer = divs[index];
   hard.style.backgroundColor='white';
   easy.style.backgroundColor='white';
}

startGame(6);

newGame.addEventListener('click',function(){
    var color=createColor();
    var index =Math.floor(Math.random()*6);
    
    textColor.innerText =`rgb(${color.red},${color.green},${color.blue})`;
    divs.forEach(function(div){
        var tempColor = createColor();
        div.style.backgroundColor = `rgb(${tempColor.red},${tempColor.green},${tempColor.blue})`;
    });
    
    divs[index].style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
   answer = divs[index];
   hard.style.backgroundColor='white';
   easy.style.backgroundColor='white';
});


divs.forEach(function(el){
   el.addEventListener('click',function(){
      if(el.style.backgroundColor === answer.style.backgroundColor ){
          
          newGame.innerText = 'new Game';
          el.style.backgroundColor ='black';
          el.style.transition='all 0.5s linear';
      }
   });
});

easy.addEventListener('click',function(){
    startGame(3);
     if(hard.style.backgroundColor==='blue'){
        hard.style.backgroundColor='white';
    }
    easy.style.backgroundColor='blue';
    easy.style.transition='all 0.5s linear';
     
     
});
hard.addEventListener('click',function(){
    startGame(6);
    if(easy.style.backgroundColor='blue'){
        easy.style.backgroundColor='white';
    }
    hard.style.backgroundColor='blue';
    hard.style.transition='all 0.5s linear';
    
});

