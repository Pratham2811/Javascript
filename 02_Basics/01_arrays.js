//arrays int the javascript are the objects and not primitive data types 
//arrays are the collections of items or elements of different data types in javascript 
 // arrays are resizable 
 
 const myArray=[0,1,2,3,4,"Hitesh"]
 console.log(myArray[5]);
 //we can not acces array by passing arbitary string to it like myArray["one"]//not accessed
 //JavaScript array-copy operations create shallow copies.


 //array Methods 

 //1.Push()
 let someArray=[1,2,3,4,5]
 someArray.push(8)
 console.log(someArray);//push the element at the end of the erray

 //2-pop()-Pop the element at last of the array 
 someArray.pop()
 console.log(someArray);

 //unshift()-unshift will add the element at start of the array and it wil shift the other elements which is not 
 //good practice if there is 10000 elements in the array then we have to shift the 10000 elements which results to load in computer
 someArray.unshift(9)
 console.log(someArray);
//shift-it will remove unshifted value from array like pop which will delete value pushed by push 

someArray.shift()
console.log(someArray);

//includes -checks that element is present int the array or not 
console.log(someArray.includes(1));
//indexOf-gives the index of given element 
console.log(someArray.indexOf(5));

const newArray=someArray.join()
console.log(newArray);
console.log(typeof(newArray));//types is string 


//Slice,splice

console.log("a",someArray);
const myn1=someArray.slice(1,3);//in slice last number is not included in substring 
console.log(myn1);//slice will return the string from starting index to end-index but end index is not included 
//o/p of above is 1,2
console.log("b",someArray);
//splice--slice will manipulate array and slice will not /splice will include end index 
const myn2=someArray.splice(1,3)
console.log(myn2);
console.log("c",someArray);

//major difference between the slice and splice is that splice will cut the array from given range and manipulate the given array 





