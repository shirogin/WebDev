/*//var value=prompt("Guess the Number");
//console.log(typeof value);
//value=Number(value);
console.log(typeof value);
console.log(value);
if(!isNaN(value)){
    if(value>10){
        console.log("value is too big "+value);
    }else if(value>5){
        console.log("value is good "+value)
    }else{
        console.log("value is too small "+value);
    }
} 
//var guess=8;
// Guess Game
 if(!isNaN(value)){
    if(value>guess){
        alert("Your value is bigger.");
    }else if(value===guess){
        alert("Congragulation you guessed it.");
    }else{
        alert("your value is smaller.")
    }
}else{
    alert("You didn't give us a number");
} */

// max
var list=[20,87,945,75,64,972,678,45];

//functions
function Max(list){
    var max=list[0];
    for(var i=1;i<list.length;i++){
        if(list[i]>max) max=list[i];
    }
    return max;
}
function MaxPosition1(list){
    var max=Max(list);
    return list.indexOf(max);
}
function MaxPosition2(list){
    var max=list[0],pos=0;
    for(var i=1;i<list.length;i++){
        if(list[i]>max) {
            max=list[i];
            pos=i;
        }
    }
    return [max,pos];
}
console.log(max(list));
//Home Work
// 1- printReverse(list);==> printReverse([0,48,44,95])=> 95 44 48 0
// 2- SumArray(list);==> SumArray([0,48,44,95])=> 187
// 3- isUniform(list); ==> isUniform([0,48,44,95])=> false / isUniform([0,0,0,0]) => true
