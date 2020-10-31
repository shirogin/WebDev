const display=document.querySelector("h1"),
    colorDisplay = document.querySelector("#colorDisplay"),
    resetButton = document.querySelector("#reset"),
    message = document.querySelector("#message"),
    modeButton = document.querySelectorAll(".mode"),
    squares = document.querySelectorAll(".square");
var squaresColors= [],
    mode='Hard',
    color,
    GameEnded=false;
//configure Buttons    
resetButton.addEventListener("click",function(){
    reset();
});
modeButton.forEach(modeClicked=>{
    modeClicked.addEventListener("click",function(){
        modeButton.forEach(el=>{
            el.classList.remove("selected");
        });
        modeClicked.classList.add("selected");
        mode = modeClicked.innerText;
        resetButton.innerText="New Game?";
    })
});
squares.forEach(square=>{
    square.addEventListener("click",function(){
        if(!GameEnded){
            resetButton.innerText="New Game?";
            if(this.style.backgroundColor===color){
                // Correct answer
                message.innerText="Correct ! :)";
                display.style.backgroundColor = color;
                squares.forEach(square=>{
                    square.style.backgroundColor = color;
                });
                GameEnded=true;
            }else{
                message.innerHTML="Try again!"
                this.style.backgroundColor="transparent";
            }
        }
    });
})

StartNewGame();

function reset(){
    resetButton.innerText="New Colors";
    message.innerText="";
    display.style.backgroundColor="";
    StartNewGame();
    GameEnded=false;
}
function StartNewGame(){
    var num;
    if(mode==="Hard") num=6;
    else num=3;
    ChangeColors(num);
    PickColor(num);
}
function PickColor(num){
    color= squaresColors[getRandomInt(num)];
    colorDisplay.innerText=color;
}
function ChangeColors(num){
    squares.forEach(el=>{el.style.display="none"});
    for (let i = 0; i < num; i++) {
        squaresColors[i] = RandomColor();
        squares[i].style.backgroundColor = squaresColors[i];
        squares[i].style.display = "";
    }
}
//Create a Random Color    
function RandomColor(){
    return "rgb("+getRandomInt(220)+", "+getRandomInt(220)+", "+getRandomInt(220)+")";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}