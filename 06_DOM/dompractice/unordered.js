let unorderlis=document.querySelector('ul')

let button1=document.querySelector('#button1')
let button2=document.querySelector('#button2')
let inp=document.querySelector('input')

let li;

button1.addEventListener('click',function(){
    if(inp.value.trim()===''){

    }
    else{
        li=document.createElement('li')
        li.textContent=inp.value;
        unorderlis.appendChild(li)
        inp.value=''
        
    }
  
})
button2.addEventListener('click',function(){
    unorderlis.removeChild(li)
  
    

})
