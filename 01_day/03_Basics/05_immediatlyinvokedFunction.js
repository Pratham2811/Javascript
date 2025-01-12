//Immediately Invoked FUnction 
//why IVF 
//some time content in the function is polluted because og global scope
//to avoid thye pollution we define our own scope and executr it immediately
//problem is Global scope pollution occurs when variables or functions are declared in
// the global scope, making them accessible from anywhere in the code. 
//1.Naming Conflicts: If multiple scripts or libraries use the same variable or function names, they can overwrite each other, causing unexpected behavior or bugs.
//2.Unintended Access: Variables in the global scope can be accidentally modified from any part of the code, leading to hard-to-debug issues.
//how we write ify 
//just you have to wrap whole function in paranthesis 
 (function chai(){
    console.log("Hitesh Sir");
 })
 ();//calling function //semicolon is compulsory 
 //above is the synatx of immediatly invoked function 
//(wrapping function here)(calling function )

//IMP if you write immediatly invoked function then you havw to write semicolon after calling function otherwise it will give an error 
 (function madane(){
    console.log("Madane");
 })();
 //paaing argument in IIF
 //using arrow function as well
 ( (name)=>{
    console.log(`Hii${name}`);
 })(" Hitesh")//passing argument while calling

 //nammed IIF is COmmon FUnction with name
 //Unnamed IIF arrow function mention above and also passed parameter 
 