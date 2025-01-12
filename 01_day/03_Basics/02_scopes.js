// we learn about the scopes 
// the thing is that var is accessible outside the block of code and not let 
//lets see example 

if(true){
    let a=0
    const b=9
    var c=98//if we change the value of c outside this block the c's value get changed as well but not of a,b


}
//console.log(a);//showing error that a is no defiend because a is defined in only the scope of the if statement 
//console.log(b);//same as the let 
console.log(c);//no erroe because var is accessible outside the scope as well 
//if we change var  here then it will definetly changes 
c=9
console.log(c);
c=90
console.log(c);

//details
let a=10
const b=20
var c=30
if (true){
    let a=100
    const b=200
    var c=300
    console.log("Inner a: ",a);
    console.log("Inner b: ",b);
    console.log("Inner c:",c);
}
console.log("outter a: ",a);
console.log("outter b: ",b);
console.log("outtter c: ",c);
// you will defintly see the differnece between var let const
//story is allabout global scope and local scope 

//if you check global scope in browser is different and also different for code enviornment as well in the vs code means node.js enviornment 
 
