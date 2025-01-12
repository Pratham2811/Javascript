//for of 
//these loops are array specific 
const arr=[1,2,3,4,5,6]

//for of
/**
 * syntax
 * for (const iterator of kis chiz ke upar loop lagana hai) {
    
}
 */

for(const i of arr){
    console.log(i);
}
//thats it we dont have to  give condiition not updation this loop will take care of it 

const greeting=`Heloo sakshi`
for(const greet of greeting){
    if(greet==' '){
        continue
    }
    console.log(`Each char is ${greet}`);
}
//Maps
//Map object holds the key value pairs and remembers the original insertion order of the keys .

const map=new Map()
map.set('State','MH')//first one is the key after comma its value 
map.set('state','Haaryana')//we written same key name so if we output the state the output is haryana 
//we use set() method to insert key value in map
//to get the keys value we have method get()

console.log(map.get('state'));
map.set('Country','India');
map.set('Dist','Pune')
console.log(map.size);
//size of map is 4 it counts key value pair as a 1 
map.delete('state')
console.log(map.get('state'));

//maps are known for uniqueness
//we can't write duplicate values for it 

//lets try for of loop on it 
for(const key of map){
    console.log(key);
}
//above loop will give the output in the array format 
//by destructuring a arrya we can get normal output
//below is the destructuring the array 
for(const [key,kahtun] of map){
    console.log(`The value of key ${key} is ${kahtun}`);
}



//lets see if object is itreted or not 
const games={
    game1:'Last Of us 2',
    game2:'GTA 6',
    game3:'PUBG'

}
/** 
*for(const key of games){
 *   console.log(`Name of the Game is ${key}`);
 *   //here we get an error because objects are not iterable there is other method to itreate through the object 
*}
*/

//there is loop called for in used to itreate the objects 
//for in not only for object we can use it in other usecases as well 


