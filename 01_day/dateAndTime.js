let myDate=new Date()
console.log(myDate);
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
//every function will change the format of date and time 

//Months in js will start from the 0
//create random date 
let myCreateDate=new Date(2004,3,28) 
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString( ));
let myCreateDate1=new Date(2004,3,4,5,6,7,4)
console.log(myCreateDate1.toLocaleString());

//syntax for declaring dates 
let createMyDate=new Date("2023-08-7")
console.log(createMyDate.toLocaleString());

//writting dates in indain standards 

let indianDate=new Date("1-14-2023")
console.log(indianDate.toLocaleString());

//timestamp used in polls 

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(createMyDate.getTime());
console.log(Math.floor(Date.now()/1000));//converted into miliseconds 


//Some mor methods in date 
let newDate=new Date()
console.log(newDate.toLocaleDateString());
//to know the month we use .getMonth()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//impp Date Method 
newDate,toLocaleString('default',{
    weekday:"long"
})