const areay1=[1,2,3,4,5,6,7,8,9]
 const newArr=areay1.map((item)=>{
    return item*10;
 })
 //console.log(newArr);
 const newArr2=areay1.map((item)=>{
    const a=item>2;
    return (a)
 })
 //console.log(newArr2);
 const cities=["pune","mumbai","nagpur","delhi","banglore","hyderabad"]
 const newCities=cities.map((city)=>{
    return city.toUpperCase()
 })
 //console.log(newCities);
 const bothArray=[areay1,newCities,cities,newArr,newArr2]
 for(let i=0;i<bothArray.length;i++){
    for(let j=0;j<bothArray[i].length;j++){
      //console.log(bothArray[i][j]);
      
    }
    
 }

 const sparseArray=[1,2,3,"hii",4,5]
 const  newSparseArray= sparseArray.map(item=> item*10)
 //console.log(newSparseArray);
 
 //map without return statement 

 const array=[1,2,3,4,5,6]
 const multiple=array.map((item)=>{
    item*10;
 }) 
 console.log(multiple);//output is undefined
 
 
 