//jab bhi aap kisi element par kisi bhi prakaar ka koi action karte ho to waha par event by default automatically raise  hota hai ab agar 
//apne koi event listener nahi banaya hai to wo event ignore kardiya jata hai par agar apne listener banaya hai us event par to wo event ifnore nahi 
//kiya jata balki uska listener chalega 
let raisingEvent=document.querySelector("#button")
raisingEvent.addEventListener('click',function(){//akso an double click means evant listened whent clicked double (dblclick,function)
    alert('want to downlaod the code ')
    raisingEvent.textContent='Starting....'
    raisingEvent.style.backgroundColor='red'

});
let raisingEvent1=document.querySelector("#mouseover")
raisingEvent1.addEventListener('mouseover',function(){
    raisingEvent1.textContent='Mouseleave'
    raisingEvent1.style.backgroundColor='blue'
})
let raisingEvent2=document.querySelector("#mouseover")
raisingEvent2.addEventListener('mouseleave',function(){
    raisingEvent1.textContent='Mouseover'
    raisingEvent2.style.backgroundColor='button'
    
})
document.querySelector('body')
.addEventListener('mousemove',function(dts){
    console.log(dts)
})

