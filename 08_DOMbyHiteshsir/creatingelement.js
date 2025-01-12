let parent=document.querySelector('.parent')
//console.log(parent);
 // console.log(parent.children[0].innerHTML  );
  
/*for (let i = 0; i < parent.children.length; i++) {
console.log( (parent.children[i].innerHTML));

    
}*/

parent.children[1].style.color='aqua'

console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);



let dayone=document.querySelector('.days')
//acessing parent Element of the days
console.log(dayone);

console.log(dayone.parentElement);
//next sibling of the monday
console.log(dayone.nextElementSibling)

//concept of node list

console.log("NODES: ",parent.childNodes);


