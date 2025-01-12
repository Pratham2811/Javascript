let create1=document.createElement('h2');
create1.textContent='hey'
create1.classList.add('makeitred')
//but this will not add in html file so to add it follow below syntax
//kahaparrakhoge.appendchild()
//so to keep in body

document.querySelector("body").appendChild(create1)

let createimg=document.createElement('img')
createimg.src="https://images.unsplash.com/photo-1725610588086-b9e38da987f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
document.querySelector('body').appendChild(createimg)
 

//three steps 
//createElement()
//appendChild()
//removeChild()
