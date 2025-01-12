//aisa koi funtion jo ek koi function ko return karde 
function counter(){
    let count =10;
    return function(){
        count++
    console.log(count);
    
    }
}
const store=counter()
store();
//ek functioon jo return kare dusra function or aur wo returned function ne parent or jo usko return kar raha hai uska ek to variable use kare 
//speciality-jab first function call hoga  or inner function return karega to demoslish hoga kya otter function so lekin coount to first function me tha or wo finish hone ke bad count ko kase increment kare baba 
//to colusre me kya hota hai compiler checks that is outter function things are used in inner if yes then it will store that value for the use of inner function and demoslish the outtter function 
