JavaScrpit
===========
Part 6 : Conditions
-----------
### if(Boolean(Logical Operation,Condition)) 
    if(true){} // does enter the bracket 
    if(false){} //doesnt enter the bracket 
#### Examples
    var b=20;
    if(b>10){console.log(b)}
### if else
    if(Condition){} //Condition true does enter this bracket 
    else{} // Condition false enter this bracket
### if else if else
    if(Condition){} //Condition true does enter this bracket 
    else if(Condition2){} // Condition2 true does enter this bracket 
    else{} // Condition2 false enter this bracket
Part 7 : Loops
### while(Boolean(Logical Operation,Condition))
    while(prompr("enter your name:")!=="Youcef"){
        console.log("Not Youcef")
    }
    var b=prompt("enter a number:");
    while(b>0){ //if condition is true then it does enter the bracktets
        console.log(b);
        b=b-1; // b--; // b-=1;
    }
### for Loop
    for(var i=0; i<LoopsNumber ; i++){
        console.log("loop number "+i);
        // more code if you want
    }
> exercice 

Part 8 : Arrays (lists)
#### How to Create and array?
    var list=[];
    var list2=[10,854,878,97];
