//if
//in ifwe check the conditon using comparison operater if the condition is true code in the if scope is executed otherwise it will not Executed
 if(2==2){///true
    console.log(2);
 }
 const isUserLoggedIn=false
 if(isUserLoggedIn){
    console.log("Yes User Logged in");
    //condition is false it will not execute 

 }
 const temperature = 41

if ( temperature === 40 ){
     console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
 //<, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
     console.log(`User power: ${power}`);
 }



 const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");//this tyype of codes are not recomendable


//Using else if condition for the checking many conditions 

if (balance < 500) {
   console.log("less than 500");
 } else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
     console.log("less than 750");
    
 } else {
  console.log("less than 1200");

 }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//&& will check if both the conditions are true then execute the code 

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
//or || either one condition should be true for the execution of that particular code 
if (loggedInFromGoogle || loggedInFromEmail) {

    console.log("User logged in");
}



//+++++++++++++Another Concept+++++++++

//Nullish coalescing operatotr(??):null undefined
//above operater onl;ly works on null anhd undefined value
//how to use it 
//it used when some value is coming from database when value comes itts okay 
//but if value is not coming from data base then there shopuld be some value other wise entire code eill get enterrupted 
//so this operator does the thing is if there is value it takes that value and if there is no value coming it assigns the null or undefined 
//lets use it 
let val1=5??10
console.log(val1);//this will take the value 5 because it is value 
let val2=null??10//it will take 10 because 10 is value and if there is not a value then null is taken 
console.log(val2);
//same for undefiend


//ternary operater
//its is shorthand for if else
//condition?true:false=>syntax
2==2?console.log("Good"):console.log("Bad");//goood
2!==2?console.log("Good"):console.log("Bad");
