let swapImg=document.querySelector('#image1')
let swapImg2=document.querySelector('#image2')
let swapping=document.querySelector('#swapButton')
swapping.addEventListener('click',function(){
   let src1=swapImg.src;
   let src2=swapImg2.src
   swapImg.src=src2
   swapImg2.src=src1
})

//jab bhi forms ke sath deal karo ki fooooorms page ko reload karte hai aur tumhe yad rakhna ki page reload na ho ,nahi to agar page reload hua to 
//js nahi chalegi,kyuki js chalne se pehle hi page reloade ho jayega 
//How to avoid it by preventDefault();
let form1=document.querySelector("form")
let validate=document.querySelector("form")
let validate1=document.querySelector("#input1")
let validate2=document.querySelector("#input2")
let inps=document.querySelectorAll('inputs[type="text"]')//constains all html elements in NodeList .Nodelist is array type structure which constains html elements 
let h5=document.querySelector('h5')

form1.addEventListener('submit',function(eventsubmit){//event submit is the evant which is submitting the forms elements 
   eventsubmit.preventDefault();//byy the page will not relaod 


   //validate  from
  /* console.log(validate1.value)
   console.log(validate2.value)
   to get tha value of form fields 
   */

   if(validate1.value===''||validate2.value===''){
      console.log('Blank');
      h5.textContent='Fill all the fields'
      h5.style.color='crimson'

   }
   else{

      h5.textContent=''
      h5.style.color='black'
      console.log(validate1.value)
      console.log(validate2.value)
      
   }
})


// we are electingd inputs differently so what if we have 20 inputs ia there only work remained to do that select all inputs and do that selects all inputs 

// so we have document.queryselectorAll('inputs type="text"')




