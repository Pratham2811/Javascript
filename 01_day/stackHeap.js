//we will learn int this slid about stack and heap i javascript 

//stack memory is used for primitive data type ..........copies of data 
//heap is used for non primitive data types .............reference of values 

//lets see how stack passes the copies of values 

let someNumber='Hare Krishna'
let anotherName=someNumber
console.log(anotherName);
anotherName='Hare Ram'
console.log(anotherName);
console.log(someNumber);

//lets see how original value is ,manipulated when we pass reference of values in Heap

let userOne={
    email:'pratah@google.com'
}
console.log(userOne);
let userTwo=userOne

userTwo.email='hare@google.com'
    console.log(userOne);//here we can see that actual mail of user one is changed 
    console.log(userTwo);



