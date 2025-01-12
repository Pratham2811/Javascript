//tehere are two steps of the promises 1)Consumption 2)Creation
//1)Creation 
const promiseOne=  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//method to connect the consumption it wil connect to .then()
    },1000)
   
})

//use of resolve and reject
//now wehave created the the promise and now we have to consume it 
//we use consume promise using .then()

//2) COnsumption
promiseOne.then(function(){
    console.log('promise COnsumed');
})//then hase the dirct connetion with the .then()


//to connect reolsve and the consumption we have to call the method named resolve()


//Seconf methof to creat a promise 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
        
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})


//promise 3
const promiseThree=new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve({username:'chai',email:'chai@gmail.com'})
      },1000)
})

promiseThree.then(function(user){
    console.log(user);//used user here to ge t  the data from the resove()method ,mentioned while creating the promise 

    
})


//promise 4
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:'hitesh',password:'Hitesh@123'})
        }
        else{
            reject('ERROR:Something Went Wrong') //here is the actual use  of the reject keeyword 
            //reject keyword is used to give error or any error is happened 
        }
    },1000)
})

//how to consume this promise 

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    

}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log('proomise is either resolved or rejected ');
    
})