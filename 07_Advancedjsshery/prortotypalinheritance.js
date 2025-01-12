//its simply the inheritance 
function makeHuman(name ,age){

    this.name=name;
    this.age=age;
}
//defining proyotupe 
makeHuman.prototype.chacha=12;
//aisa koi bhi function jisme this ka upyoug karte ho use function ko call karne ke liye new ka upyog kare 
const storing=new makeHuman("Prath",29)//it gives blank object 
console.log(storing);
const human2=new makeHuman("jai hind",89)
console.log(human2);




