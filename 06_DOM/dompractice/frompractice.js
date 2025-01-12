let form=document.querySelector('form')
let h5=document.querySelector('h5')

let inps=document.querySelectorAll('input[type ="text"]')

form.addEventListener('submit',function(eventSubmit){
    eventSubmit.preventDefault()
   /* inps.forEach(function(elem){
       if( elem.value===''){
        h5.textContent="Fill The All Fields"
        h5.style.color='red'
        h5.style.fontWeight='300'
        h5.style.lineHeight='1vh'
        elem.style.borderBlockColor='red'
       }
       else{
        h5.textContent=''
        console.log(elem.value);
        
       }

    })*/
   //foor loop
   for(let i=0;i<inps.length;i++){
        if(inps[i].value.trim()===''){
            h5.textContent='Error Some Fileds are Blank'
            break;

        }
        else{
            h5.textContent=''
        }
   }
    
})