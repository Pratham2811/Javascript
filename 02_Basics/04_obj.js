// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//objects 
//singletone obkects 
const tinderUser= new Object()//declaring singleton objects 

//declaring literals objects 
const airBnbUser={}
//both will give same output 
//this point imp according to interviewer 
console.log(tinderUser)
console.log(airBnbUser);
//both will give empty Object 


//declaring objects 
const dribble={
    userName:"1234ooss",
    userId:"88978566578723",
    email:8978654457
  }
  //acessing it 
  console.log(dribble)
  
  //nested objects 
  const regularUser={
    UserId:"980989876690",
    fullName:{
      userFullName:{
        firstName:"Prathamesh",
        lastName:"Madane"
      },
      fatherName:{
        name:"Sugriv"
      }
    },
    age:19,
    wife:"sakshi"
  }
  //above given is the nested loop
  //accessing the nested loop
  console.log(regularUser.fullName.userFullName.lastName)
  //in this way we access the nested objects as well
  


  //.............++..............
  //Methods in object 
//combining 2 objects 
const obj2={
  1:"a",2:"b"
  
}
const obj3={
  3:"a",4:"b"
}
const obj4={
  obj2,obj3
}
console.log(obj4)
//aisa karne se objects me object store ho jaynge apne ko objects merg karne hai na ki object me object pass karne hai 
//lets know hoe to do that 
//we use assigns()
const obj5=Object.assign({},obj2,obj3)//if we dont use curly braces then all this object is combined in the obj1
console.log(obj5)//noew both the objects keys and values are stored in obj5
//reason behind adding the {} this to after assign that it gaurntee us that it will combine all the value 
//also another method is spread  ..._____...
const obj6={
  ...obj2 ,...obj3
}
console.log(obj6)

//syntax used when value cime from data base it comes as array of objects 
const user=[
  {
      name:"Madane",
      age:19
  },
  {
      userId:"234354",
      UserName:"prat23"
  },
  {
     type1:"Intresting"
     
  }
  ]
  
  //accessing the values 
  console.log(user[0].name)
  
  console.log(user[1].userId)
  
  //to access all the keys of the 
  //this is very important when we have manipulate data usinmg loops because rge objects data type is converted into the array 
  //key 
  console.log(Object.keys(obj2))
  
  //similarly we are able to access the values of the object 
  
//values 
console.log(Object.values(obj2))
//another intresting method is entries 
console.log(Object.entries(obj2))//converts object into array as well as key valueb pair as an array

//now we will learn that property which checks that is there key presennt in the object and it returns true or false 

//property-hasOwnProperty(pass the key here )

console.log(obj2.hasOwnProperty(1))//ithe key 1 is present in the obj2 it will return true other wise false 
