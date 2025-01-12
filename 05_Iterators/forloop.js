//loop is used when we have to do same work repeatitively 
//there are thre types of loop for,while,do while
//syntax
/**for(iterator;condtioin;updation){
 * block of code
 
}*/
//Example
let m=120
for(let i=0;i<m;i++){//this loop wil print the number from 0 to 120 
  console.log(i);
}

//there is also the concept of the nested loop
//loop inside loop
for(let i=0;i<10;i++){
    for(let j=0;j<=i;j++){
        console.log(j);
    }
    console.log();
}

//keywords in loop
//break
//continue
for (let index = 0; index <=20; index++) {
    const element = index;
    if(index==5){
        console.log(`Detected${element}`);
        break;
    }
    console.log(element);

    
}
//In break the for loop is terminated 
//kisibhi control flow ko bbreak karna hai to hum use break use karte hai 
///used in switch case

//continue
//if we have skip any one conditon then we use the key word continue 
//ek bar ke liye skip loop se bahar nahi ayega 

