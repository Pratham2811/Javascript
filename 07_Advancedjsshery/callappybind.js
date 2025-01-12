// ye teen hai function call karne ka trika kisi object ko this maan kar 
const obj={nsme:"vandana"}
function abcd(){
    console.log(this);
    
    
}
abcd.call(obj,1,2,3,4,5);
//apply
abcd.apply(obj,[2,3,4,5,6])
//bind
abcd.bind(123)

