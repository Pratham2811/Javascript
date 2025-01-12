//we are gonna study about arroe function and this keyword 
//we use this keyword for access the variable in the scope of object 
//if we have to refer to the current context means inside the curly braces then we use this keyword 
//lets see how we refer variable 
const user={
    userName:"Pratham",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.userName},welcome to Website`);//so to access the variable in current context we use this 
    }
}
//if we write this in global then what is its context 
//lets understand it 
user.welcomeMessage()
//we can change the value of key present iin the object 
user.userName="Sakshi"
user.welcomeMessage()
//to know what is current context inside the object using this 

const user2={
    userName:"Krishna",
    id:"1234567",
  loggedInMessage: function (){
     console.log(`${this.userName} id Logged in `);
       //checking contest of this object by this
    console.log(this);
    }
  
}
user2.loggedInMessage()
//in such situaltion this will show all key and value of  the object anf reference of the function 
//lets change the userName
user2.userName="Sam"
user2.loggedInMessage()//userName is replaced by sam 
//when we log this in object it will show the data of object 

console.log(this);
//if we write this in global scope it will return empty object {}

//remeber we running this program in node enviornment seprate for js 
//if this is console.log(this) in browser enviornment then object returned by the 'this' is "Window"

//we can't use this function in the function we can use it inly  in the object 




//++++++++++++++++arrow Function++++++++++++++++

//syntax:=>
//difference between arrow function and the common function is that we use => in arrow function instesd of keyword function 
//lets see basic arrow function 
const addTwo=(num1,num2)=>{
    return num1 + num2
}
console.log(addTwo(1,2));

//this is simple arrow function 

/**When to Use Arrow Functions
Arrow functions are best suited for non-method functions that do not need their own this context, such as callbacks, array operations, and functional programming tasks like map, filter, and reduce. However, they should not be used as methods in objects or classes where the this context is important for accessing properties or calling other methods. */

//implicit return where we dont have to write return state ment
//if you wrap arrow function in curly braces you have to write return statement 
//but if you wrap arrow function in parnthesis then you dont write return 
// lets see
const addThree=(num1,num2,num3)=>(num1+num2+num3)//for this we have to wte function in single line 

console.log(addThree(9,8,7));//24
//if you want to return the object by arrow functions 
const addFour=(num1,num2)=>({userName:"Hitesh"})
console.log(addFour());