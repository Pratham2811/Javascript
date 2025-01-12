//objects 
//An object literal is a list of property names:values inside curly braces {}.
//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//declaring the objects 
let jsUser={
    key:"value",
    Any:"DataType",
    number:2,
    age:19,
    logInData:["Monday","Tuesday","Friday"],
    //we can give any type of value to the key 
    "loge dIn":false

}
console.log(jsUser.key);//this is the method to access the value of key from the object 
//above accessing method is not good practice
//the key defined in the object is string and there is chances to define keys in string 
//so are not able to access the value throught dot operator  
//to access the logedIn there is problem 

//so always be used to access by this method to avoid problem 
//console.log(jsUser.loge dIn);//it gives an issue because we cant access this 

//another good method to access the value of key 
console.log(jsUser["loge dIn"]);

//3rd method using the symbol
//symbol in the objects 
//imp according interview  taken 1 symbol and add to object keys 

//there is different syntax to add symbol as key 

//defining symbol
let mysymbol=Symbol("Krishna")
let obj1={
   mysymbol:"Krishna",//we think that we have taken he symbol as key but actually not
   //syntax to take symbol as key is given below 
   //we have to write it in square braces
   [mysymbol]:"krishna"//now symbol is taken as key 


}
console.log(mysymbol);
console.log(typeof mysymbol);//symbol


//change the object values 
obj1.mysymbol="Ram"
console.log(obj1.mysymbol);//this is the string which will eventually change the value 
//to access the symbol key we have access it in square bracket
console.log(obj1[mysymbol]);//accessing symbol key

//So if we want that values are no changed use the function freeze

//Object.freeze(jsUser)
jsUser.number=5
console.log(jsUser);//number is not changed '

//always use square brackets to access the symbols 


//treating the functions as an variables in js 

jsUser.greeting=function(){
    console.log("Hello ,guys")
}
    console.log(jsUser.greeting());//it shows undefined  because greetings not become function yet lets convert it into he function 
    //when we use onluy greeting without paranthesis then it will return the functions but not value of it 
    //function is not executed but got return back 

  jsUser.hello=function(){
    console.log("HIIII");
  }  
  console.log(jsUser.hello());

  jsUser.greetingTwo=function(){
    console.log(`Hello Sir i am cofident,${this.key}`);//you are making mistake use curly braces after $
  }
  console.log(jsUser.greetingTwo());
//this all given above is object literal









