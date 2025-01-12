//we will learn about nested scope  global scope and block scope closure 
//most asked in the interview is clouser 
//clouser is {}

//nested scope 

//we can write function into function as well 


//scope 

function one(){
    const userName="Hitesh"
    function two(){
        const website="Youtube"
        console.log(userName)//here userName is accessed because we can acess the variable of function inside that function
    }
    //console.log(website);//here we cant access the function because we are accessing the varaible outside of its scope 
    //above log will give error 
two()//this will call function two and then print userName hitesh in console 
//example is bade log chote se kuch mang nahi sakte but chote log mang sakte hai 

}
one()
//executes and o/p is hitesh 


//same happens with if else 
if(true){
    const userName="Prat"
    if(userName==="Prat"){
        const website="yt"
        console.log(userName+ website)
    }
   // console.log(website+userName);//here website is not accessed because its scope is finished in the 2nd if statment


}
//also we can't access the userName here because its scope is only for if statement 


//++++++++++++++++++++++++Functions And Expression ++++++++++++++++++

//function
function addone(num){
    return  num+1
}
addone(5)
//we can call function in whole program where we want

//Expresiion 
//we only call the expression after declaring it and always below it 
//this aslo known as hoisting
console.log(addone(5));
const addTwo=function(num){
    return num+2
}