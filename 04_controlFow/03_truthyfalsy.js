//bascially truthy abnd falsy are used for checking that give any paratmeter is true or not without comparsion 
//falsy values 
//false
//-0=>negative zero
//0
//BigInt 0n
//""=>empty string
//null
//undefiend
//NaN=>not a number

//things that surprises you 
//truthy values as well
//"0"=>its string 
//"false"=>string
//" "
//[]
//{}
//function(){}
//if you compare the both fasly with each other then you will get the true as a value 

//to check an array that it is truth or falsy use below method

const array=[]
if(array.length===0){
    console.log("Array is Empty");
}
//checking that object is is empty or not by converting it into the array
const obj1={}
if(Object.keys(obj1).length===0){
    console.log("Object is empty");
}

