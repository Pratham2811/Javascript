console.log(2>1);//true
console.log(2<1);//false
//console.log(2=1);//invalid comparison 
console.log(2>=1);//true
console.log(2<=1);//false
console.log(2==1);//false
console.log(2=='h');//false
console.log(2<'h');//false
console.log(2!=1);//true

//confusing part 
//here automatically js convert '2; into the number fro comparison it only allowd in js typescript do not allow the comparision of 2 differnt data types
console.log('2'>1);//true
console.log('2'<1);//true
//for better coding practice don't compare 2 different data types avoid these types of operations  

console.log(null<0);//false
console.log(null==0);//false
console.log(null>0);//false
console.log(null>=0);//true Reason of that is equality check == and comparisons work differently  so the comparator convert null to a number ,treating it as 0 and thats why null>=0 is true and null>0  is false 

//anything you  compare to undefined it will give false as an output 
console.log(undefined>0);
console.log(undefined===0);
console.log(undefined<0);
console.log(undefined>=0);

//when we compare 2 different datatypes to each other then js start conversion of it and to avoid this we use the === operator 
//=== operator checks the equality of data types and will not allow to convert 
 console.log('2'===2);
 
 


