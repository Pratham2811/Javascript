let score=33
console.log(score)
console.log(typeof(score))
let name='3abc'
let isValidNumber=Number(name)
console.log( typeof(isValidNumber))
console.log(isValidNumber);
//here we converted the string in number type but when we have to display it in out put it will show that it is not a number 

//now lets see the type conversion of null
let some=null
console.log(some);
let convert=Number(some)
console.log(convert);
//here we see that when we convert null data type iin number then it show 0 number and type is number generally the type of the number is object which is errror in js 
console.log(typeof(convert));

//Lets covert null in bool
let convertBool=Boolean(some)//if we convert the null into the boolean then it will show the false
console.log(convertBool);
console.log(typeof(convertBool));//type of the this is boolean

//here we convert null into string its value remains the same 
//if we change the type of the null in to string it will show the type string 

let convertString=String(some)
console.log(convertString)
console.log(typeof(convertString));

//now lets see type conversion for booleans to number or numbers to boolean
let number=0
let convertIntoBool=Boolean(number)
console.log(convertIntoBool)
console.log(typeof(convertIntoBool));//for 0 its value is false

let number1=1
let convertIntoBool1=Boolean(number1)
console.log(convertIntoBool1);
console.log(typeof(convertIntoBool)); //for one it has value true

//try with random numbers and with when the variable is not intialised 
let number2
let convertIntoBool2=Boolean(number2)
console.log(convertIntoBool2);
console.log(typeof(convertIntoBool2));//when we conver unintialised varible in bool it holds the value false  

//using random number 
let number3=34
let convertIntoBool3=Boolean(number3)
console.log(convertIntoBool3);//holds true value 
 
let number4
let convertIntoNumber=Number(number4)
console.log(convertIntoNumber);
console.log(typeof(convertIntoNumber));//if we convert unintilised varialbe in numbber then it show o/P not a number type is number 

//undefined varible into string
let str
let convertIntoString=String(str)
console.log(convertIntoString);//if we convert undefined variable into string it will  holds the value undefined 
console.log(typeof(convertIntoString));//type is string


//string int bool 
let str2='prath'
let convertIntoBool4=Boolean(str2)
console.log(convertIntoBool4);//showing true vlaue and if we convert empty string to boolean it holds false
let str3=""
let convertIntoBool5=Boolean(str3)
console.log(convertIntoBool5);


let str4=''
console.log(str4);//noting will print 


