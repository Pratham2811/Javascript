const button=document.querySelector('button')
button.addEventListener('click',function(event){
    console.log(event);//Event means it consist very much events which is shownin console
    //it basically gives the event of browser and enviornment 

    
},false)

//Event propogation
/**
 * Event propagation in JavaScript is a key concept to understand when dealing with DOM events. It determines how events travel
 *  through the Document Object Model (DOM) tree. There are three main stages in event propagation: capturing, target, and bubbling. 
 * 
 * 1.Event Capturing
 * it will track DOM tree from the top to bottom means firstly executes the Event of grandgparent then parent and then child
 * 2.Event Bubbling :
 * It is the Exact opposite of the Event Capturing .It will firstlu invoke the event of chlid then parent and then garand parent lets take example
 */

//adding event on ulmeans on class images 

//by bubble capturing
const images =document.querySelector('.images ')
const owl=document.querySelector('#owl')
images.addEventListener('click',function(event){
    console.log('Clicked the images');
    
},false)
//when clicked on tha iages section the images event is invoked 

//when we have events in this section we have the two events one on parent means  images and another is the owl 
// in the this  section of event bubbling when yo click on images expectowl it will print clicked on images 
//if you clic on owl it will print or invoke the child firt and the  parent next means 

//Event bubbling travel from bottom to up of DOM tree 
owl.addEventListener('click',function(event){
    console.log('Clicked the owl');
    
},false)
//if we dont want to travel through the parents in the EVnet bubbling then we use the function names as event.stopPropogation()
//lets see how to stop the event propogaton 

const women =document.querySelector('#women')
women.addEventListener('click',function(event){
    console.log('Clicked on Women')
  event.stopPropagation()
},false)


//Event Capturing
//Event Capturing will travel The DOM tree from up to down 
//using true in third parameter 


//goal or Example 
