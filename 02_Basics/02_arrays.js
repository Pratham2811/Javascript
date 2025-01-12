//arrays 
//we can push and array into other array by using push operater 
const marvelHeros=['IronAMan', 'THor', 'thanos']
const dcHeros=["Lucifer" ,"Adam", "flash"]

//dcHeros.push(marvelHeros)
//console.log(dcHeros);
//array marvel heros are pushed in the dc heros and that is not a good practice
//to remove array into the array we simply use the concat by creating new array

const allHeros=marvelHeros.concat(dcHeros)//concatination of both array happens and it returns to allHeros 
console.log(allHeros);

//another method is spread
const allNewHeros=[...marvelHeros,...dcHeros ]
console.log(allNewHeros);//mostly used in industry 
//use 3 dots ... it will spread 



//....................    ...............


const anotherArray=[1,2,3,4,[5,6,7,8],9,[20,[23,34],4]]//this syntax looks horrible lets change it 
//we seen above there array inside array and its not good syntax 
//to remove it we use  flat(
const newRealArray=anotherArray.flat(Infinity)//in bracket we have to write depth it means how much arrays are present in array and if we give infinity it will calculate by itself 
console.log(newRealArray);

//we use this many times 
//when we have to check array or not is array 
console.log(Array.isArray());
//iaArray(we pass here array to check that given cvraible is array or not )

//for example we give string to check that it is array or not 
console.log(Array.isArray("Krishna"));//false 
//to convert given string to array we use 
//from()
console.log(Array.from("Krishna"))//it will convert given string into array

//if form is confuse to give array i will give empty array 
//if we pass key value pair from not recognize that kiska array banana hai key ka ya value ka 

console.log(Array.from({name:"Krishna"}))//intesting 
 

let score1=100
let score2=200
let score5=300
let score3=600
let score4=400

//we can create array of above values

console.log(Array.of(score1,score2,score3,score4,score5));



