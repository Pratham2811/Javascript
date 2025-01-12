 /**we are going to learn the operations in this slide in js  */
 let value=9
 let negValue=-value
 console.log(negValue);//it will make value negative 
//Arithmetic operations 
 //addition
 console.log(3+3);
 console.log(8-9);//subtraction
 console.log(3*3);//multiplication
 console.log(3/3);//divide
 console.log(10%2);//modulus

 let gameCount=0
 gameCount++
 console.log(gameCount);//increment 
 gameCount--
 console.log(gameCount);//decement by one 

 //string operationsl
 let str='a'
 let str2='B'
 let str3=str+str2
 console.log(str3);//concatination of two strings 

 //comparing the 2 string 
 let str4='1'
 let str5='2'
 let str6=str5>str4//when we comaperd two strings its type become booelan
 console.log(str6)
 console.log(typeof(str6));
 console.log(typeof(str5));

 let str7='h'
 let str8='k'
 let str9=str7>str8//int this string comparision it compares number where it placed k is placed greater than h so it gives true 
 console.log(str9);

 //addition of string 
 let str10='Hare'
  str10+=' krishna'
  console.log(str10); //adds string and store in same string

  //addition of string and number 
  //adding two numbers will give number but 
  //But adding one number and one string will return string 
  let str11=11
  let str12='dbfhf'
  let str13=str11+str12
  console.log(str13);
  str11+='hello'
  console.log(str11);