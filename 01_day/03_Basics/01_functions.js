//functions in javascript 
//to Declare the functions in java script we use the keyword function
//if we have to do work repeatedly then we uses the function 
//if i hav to print the My alla data for multiple time it i quite hard to console.log fro every time 
//instead we use functions in the javascript for this purpose 

function addinTwoNumber(){
    console.log("Prathamesh ");
    console.log("Madane ")
    console.log("Sugriv")
    

}

addinTwoNumber()//we have called function here it will execute block of code present in it 

const name=addinTwoNumber()//we can store the the result of function in tha variable 
console.log(name )//most biggenners mistake 



//another type parametrized function
function parameter(num1,num2){
    return num1+num2
}
parameter(2,3)// you just call this function it will not priint anything because we didnt mentioned to print any thing
//we have to store the return value of function 
const value=parameter()//if we dont pass any argument in function then it will return not a number 
console.log(value);//NAN
const value1=parameter(2,3)
console.log(value1);//value will be 5 
  
function loginUserMessage(username){
    return `${username} is just logged in`
}//if we dont give any argument it will return undefined 
console.log(loginUserMessage()); //udefiend is logged in 
//passing argument 
console.log(loginUserMessage("Hitesh"));//Hitesh is just loggedd in 

//default argument ppassing 
function isLoggedIn(name1="You"){//passing default ardument 
    return`${name1} just logged in `
}
console.log(isLoggedIn());//if i dont pass any aregument output is you just logged in '




//Shopping cart in E commerce app
//in this situation we dont know how many arguments are coming so we are gonna manage the parameter 
//add to cart wali situation jaha price add karni hoti hai 

function calculateCartPrice(...num1){//rest operator to manage the parameters
    return num1
}
//we are able to pass only the num1 only one value 
//what if user addds no of products in the cart so we use rest operater(...num1)same as spread operater
//now we can pass any no of values 
//calculateCartPrice(200,199,1999,29999,39999,50000)//rest operater convert it into the array and then by loop we will adding price 
console.log(calculateCartPrice(200,199,1999,29999,39999,50000));

//we can pass objects as well as argument in the function
//lets see how can we pass objects as argument 

const user={
    userName:"Sakshi",
    special:"Loving Caring COnsiderate",
    balance:100000000000000

}
//cretaing the function and passing the copy of the object 
function handlingObject(objectName){

    console.log(`My Wife Name id ${objectName.userName} Special thing About her is ${objectName.special} she is very rich,her bank balance is ${objectName.balance}`);
}
console.log(handlingObject(user));

//also we can pass whole object by creating the new object as an argument 
//lets see 
function creatingObjectAsArgument(anyObject){
    console.log(`Name Of Product is ${anyObject.productName} And the price is ${anyObject.price}`);
}
console.log(creatingObjectAsArgument({
    productName:"BeedSheet",
    price:150
}));//lo dekh lo samjh gye na ??

//lets pass array as well in the function parameter 
const muArray=[299,499,499,599,699,799,899,999,1999]
function argArray(getArray){
    for(let i=0;i<getArray.length;i++){
        console.log(getArray[i]);
    }

}
argArray(muArray)//accessing the array


//es6- Fat arrow function
//a)basic arrow function
//b)fat arrow with one parameter
//c)fat arrow with implicit return 
  //we dont have to return a retuen type in while declaring the function
  //write keyword-"Function"



