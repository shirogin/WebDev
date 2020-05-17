//forEach loop
var SumArray = function(arr){
    var Sum=0;
    arr.forEach(function(element){
        Sum+=element;
    });
    return Sum;
}
var list=[488,67,49878,216,8947];
/* list.forEach(function(el,i){
    console.log(el,i);
}); */
// console.log(list.sort(function(a,b){
//     if(a<b) return 1;
//     else return -1;
// }));
var Person={
    firstName: "Youcef",
    lastName : "Madadi",
    age: 22
};
function CreatePerson(){
    var person= {
        firstName: prompt("enter first name"),
        lastName: prompt("enter last name"),
        age: Number(prompt("enter age"))
    };
    var addFullName=function(){
        person.fullName=person.firstName+" "+person.lastName;
    }
    addFullName(person);
    return person;
}
var quit=false,
    persons=[];
/* while(!quit){
    persons.push(CreatePerson());
    var command=prompt("quit or next or show");
    if(command==="quit") {
        quit=true;
    }
} */
persons.forEach(function(el){
    console.log(el);
})

var cinema={
    salons:[
        {name:"A",numbOfSeats:200,screenSize:{height:9,width:16}},
        {name:"B",numbOfSeats:1000,screenSize:{height:9,width:16}}
    ],name:"Name"
}
console.log(cinema.salons[1].screenSize.height);