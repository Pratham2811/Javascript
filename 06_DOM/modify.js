let modify=document.querySelector('button')
modify.textContent="starting...";

//kisibhi element ko chnage karne ke pahle uska pahla step hota hai usko change karna 

//We can change any elemnt by selecting it by (textcontent="")
let change=document.querySelector('h1')
change.textContent="I am here";//= equal ka matlab hota hai pehele jo value hota hai use hata do aur textcontent wala chap do \

let change2=document.querySelector('h2')
change2.textContent+="I am here";//pichle value ko rakho aur age add karo ye wala text +=

//to insert the tag innerHTML is used 
//to add only text text content is used 

let change4=document.querySelector('h4');
change4.textContent="<i>Helllo</i>";




//Manipulating styles and css
let Manipulate1=document.querySelector('h1')
Manipulate1.style.color='red';

