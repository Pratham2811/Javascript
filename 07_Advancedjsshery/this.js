//this keyword gives the current info about the object
//this value can be changed as the scope of this is changed 
// lets see for what scope the value of this \
// global scope-Window 
console.log(this);//getiing 

//function-window
//fnc inside method-window(es5)
//fnc inside method(es6)-object
var obj2={
    sayname:function(){
        const child=()=>{
            console.log(this)
        }
        child()
    }
}
obj2.sayname()
//es5 me function ke andar function likha to andar wala this window lelega 
//so mostly we use arrow function for that pprupose ki this parent ki property lw which is object 
//agar hum first function arrow fnction declare karnge to wo bhi to ek arrow function hai to wo global ki proerty in herit karega wo hai window not an object 
//constructor fnc mein this ki value -new balnk object
function add(){
    console.log(this);
    console.log("guys");
    
    
}
const ans=new add()
//new creates blank object 

//event listener mein this ki value -that element jispar event list .laga hai 

documnet.queryselector("button")
.addEventListener("click",function(){
    console.log(this)
    
    
})
//button ko hi denote karega