/*var firstName=prompt("Enter your First Name please:");
var LastName=prompt("Enter your Last Name please:");
var Age=prompt("Enter your Age please:");

console.log("Your full name is :" + firstName + " " + LastName);
console.log("You are "+Age+" years old.");*/

var year = prompt("Enter your birth year :"),
    month = prompt("Enter your birth month :"),
    day = prompt("enter your birth day :"),
    miliseconds=new Date()-new Date(month+"-"+day+"-"+year),
    days=miliseconds/(1000*3600*24);

alert("you lived "+days+"days");