const languages={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    py:'python'


}
//using  the for in loop to itreate the objects 

for(const [key,value]in languages){
    console.log(key,':-',value);//if do this output we get is the single letter of keys 
}
//if you do the only key itreations it will not return you the value instead you or we get the keys

//right method to access the values or objects is
for(const key in languages){
    console.log(`${key} :- ${languages[key]}`);
}