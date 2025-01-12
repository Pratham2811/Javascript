let start=document.querySelector('#start')
let stop=document.querySelector('#stop')
let h3=document.querySelector('h3')
let interval;
start.addEventListener('click',function(){
  
   let count=0;
interval= setInterval(function(){
    h3.textContent=count;
    count++;
   },0.00000000001)
})
stop.addEventListener('click',function(){
    clearInterval(interval)
})


//to stop the countdown we have to clear the setInterval

/**
 *  /* for(let i=0;i<60;i++){
        h3.textContent=i;//this will not work understood
    }*/

        //here only one thing will work is that setInterval(callback(function),timer in milliseconds)
/*setInterval(function(){
    console.log("nacho")
},1000)*/
 