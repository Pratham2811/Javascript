 const score=99
//Another method too declare the number 
 const balance=new Number(100)// at output it specially gives the type of value 
 console.log(balance);
 console.log(score);
   

 console.log(balance.toString());//Number  will become string 

 //toFixed(Number)-it is used to to fix the precision value of decimal after a decimal how much percision should be shown is given At palce number 

 let price=100
 console.log(price.toFixed(2));//O/P-100.00||if it is 4 the 100.0000


 //toPrecision(range 1to 21)-like toPrecision(3)-focuses of 3 value 
 //Example
 let rationalPrice=124.9
 console.log(rationalPrice.toPrecision(3));//it will round off 


 //toLocalString()-it is the used to give commas for big integers 

 let bigNumber=10000000
 console.log(bigNumber.toLocaleString('en-IN'));//sets standards as indian default it is of US


 //to check what is max value of number as well as min value and safe integer we use following functions
 //max
 Number.MAX_VALUE
 Number.MIN_VALUE
 Number.MAX_SAFE_INTEGER
 Number.MIN_SAFE_INTEGER





 //+++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++


console.log(Math);//shows the type of Math and functions present in math library
//to get the functions present in the math library Go on Browser and get the functions 

//absolute...abs(negative number)-The negative number is converted into the absolute number in positive 
console.log(Math.abs(-4));//O/P=4
console.log(Math.round(4.6))//round off the value to 5
console.log(Math.ceil(4.2));//ceil function is used to select the higher value here the value it selects is 5
console.log(Math.floor(4.9));//floor is used to  select the lower value even if value after decimal is big 
//o/p of the above is 4


console.log(Math.max(4,5,10));//checks the maximum value 
console.log(Math.min(1,2,3));//gives minimum value 

console.log(Math.pow(2,3));//gives the power of 2 means 2 power 3

//........Math.random()........imp
//math.random() ki value hamesha 0-1 ke bich me it can be 0 and 1 as well
console.log(Math.random());

//so to take the values from 0.something to 1-10
//to get value of math.random() from 1-10 we just simply multily it by 10
//what if random value comes as 0.01 the 0.01*10=0.1  again it comes in the value of zero 
//the thing is we have to avoid such values from 0 to 1 in practical life suppose we have to roll dice no should not be 0.1 or 0.2 it should be between 1 and 6
// so to avoid such values we add 1 to the math.random()*10
console.log((Math.random()*10)+1);//noe the values ranges between 1 to 10
//0.001*10=0.01+1=1.01

//we use floor to get precise and the stable value 
console.log(Math.floor(Math.random()*10)+1);//we will not get decimal values 

//lets have example that i want number from 10 to 10 
//so min-10and ,max is 20
let min=10
let max=20
console.log(Math.floor(Math.random()*10)+min);//values come in between 10 to 20 

//******************** Thanks to Hitesh sir ********************



