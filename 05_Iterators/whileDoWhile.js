//while loop syntax
/**
 * initialisation
 * while(condition){
 * Block Of code
 * updation
 * }
 */
//Example

let index=0
while(index<10){
console.log(`this the number${index}`);
index=index+2
}

let myArray=[1,2,3,4,5,6,7,8,9,'Flash','Thor']
let i=0
while(i<myArray.length){
    console.log(myArray[i])
    i++
}

//do while 
//this loop will execute at least 1 time even if the condition is not matched 
/**
 * syntax
 * do{
 * block of code
 * updation
 * }while(condition)
 */
let score=0
do{
    console.log(`score is ${score}`);
    score++
}while(score<0)//runs at least once 