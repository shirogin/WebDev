console.clear();

var add= function(x,y){
    return x+y;
}
var sub= function(x,y){
    return x-y;
}
a
var list=[48,987,654,86,4589,6548,3112,453,26];

console.log(ApplyOnList(list,add));
console.log(ApplyOnList(list,sub));
function ApplyOnList(list,callback){
    var total=0;
    list.forEach(function(el){
        total=callback(total,el);
    });
    return total;
}
Array.prototype.ForEachInverse = function(callback){
    for(var i=this.length-1;i>=0;i--){
        callback(this[i],i,this);
    }
}
list.ForEachInverse(function(el){
    console.log(el);
});