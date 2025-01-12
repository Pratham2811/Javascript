const practice=[25,26,27,28,29,30]
const squared=practice.map((number)=>{
    return number*number;
})
console.log(squared);
 

const bools=[true,true,false,true,false,false]
  const num=bools.map((bool)=>{
    if(bool){
        return Math.floor(Math.random()*10);
    }
    else{
        return 0;
    }
  })
  console.log(num);

  
const prices=[1.23,23.12,19.66,99.45,8.5,20,32.33,87.99,8.0,50,2,100]
const taxedPrices =prices.map((price)=>{
    if(price>10){
        let tax=price*(20/100)
        return price+tax
    }
    return price
})
console.log(taxedPrices);

