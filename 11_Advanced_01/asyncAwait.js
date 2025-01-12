const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'hitesh',password:'Hitesh@123'})
        }
        else{
            reject('ERROR:Something Went Wrong') //here is the actual use  of the reject keeyword 
            //reject keyword is used to give error or any error is happened 
        }
    },1000)
})
//consumption of the promise using asyc Wait 
async function consumePromiseFive() {
try {
    
    const data=await promiseFive//this is async await 
    console.log(data);
    
} catch (error) {
    console.log(error);
    
}
    //async Await dont have the direct way to handle the error so  have to use the try catch block to avoid the errors 


}
consumePromiseFive()

async function getAllData() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users/")
        const data=await response.json()
        console.log(data);
        
        
    } catch (error) {
     console.log('E:',error);
        
    }
} 
//getAllData()


//usually we use awit or async functions when  task takes so much of time to execute and the to doo tasks so we use timeout functions for the task delegation 
//so we use await for same reason 
//so why i am mentioning this is that to covert the fetched Api to json it also takes so much time so we need to await for the conversions as wll


fetch('https://jsonplaceholder.typicode.com/users/')
.then((response)=>{
    return response.json()
})
.then((data)=>{

    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})