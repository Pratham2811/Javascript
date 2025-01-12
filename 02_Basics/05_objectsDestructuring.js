//destructuring of objects 
const course={
    courseName:"FrontEndDomination",
    price:"999",
    courseInstructor:"Hitesh Chaudhary"
    
}
//now to access the object generallyb we use 
console.log(course.courseName)
//but to do it every time or we have to print the same value for 3 tims then it quite lenthy process 
//so we have another syntax known as the objects destructuring 
//syntax
//const{key ka nam dalo :key ka nam bhi change kar sakte hai }=course //kaha se value extract karni hai to equal to course ye diya hai 

const{price}=course
console.log(price)//see here we accessed value without coventional method 
//lets see by changing key name
const{price:money}=course
console.log(money)//so to access the value we dont have to erite course.key


