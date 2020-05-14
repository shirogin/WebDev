var guessed = false,
    guess = 8;
while(!guessed){
    var value=Number(prompt("Guess the Number"));
    if(!isNaN(value)){
        if(value>guess){
            alert("Your value is bigger.");
        }else if(value===guess){
            alert("Congragulation you guessed it.");
            guessed=true;
        }else{
            alert("your value is smaller.")
        }
    }else{
        alert("You didn't give us a number");
    }
}