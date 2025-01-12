//primitive data types 
// primitive data types are the call by value means we copy the original value and don't work on original data but on copy of original data 
//7 types : string ,Number , Boolean,Null,undefined ,symbol,BigInt
//symbol is used to to make any value as unique 
//BigInt handles big scienctific values 

 
//2nd type is non primitive data types or reference type 
//in this data types the reference of value is used if we manipulate value then original value is also manipulated 


//types=Array,Objects,Functions to master the js make dominance in the browser events and objects 

//javascript is dynamic typed language because we don't need to mention the datatype of the variable 


const id=Symbol('123')//here id has unique value 
const anotherId=Symbol('123')//here anotherId has unique value because of  use symbol id!=anotherId
console.log(id==anotherId);//remember to write S capital in symbol 


//to use the BigInt use "n"at last when we write big integer 
let bigNumber=384733092839020299320203n//converted in to BigInt
console.log(bigNumber)

//non-primitive data types 
//Array
let array=['Hello','Hare','Krishna']
console.log(array);

//Objects .... objects are same like dictionaries in python with the pair of keys and value 
//objects are written in curly braces

let studentInfo={
    name:'Prathamesh',
    RollNo:22131058,
    cgpa:8.8}
    console.log(studentInfo);

    //functions 
    //unlike others languages we can store functions into the variables 

    let myFunction=function(){
        console.log('Hello Functions');

    }
console.log(typeof(myFunction));
console.log(typeof(array));
console.log(typeof(studentInfo));


