//switch case
/*switch(key){
    case value: //here number is inserted 
    break;
    default:
         break;
}*/
//Above is the syntax of the switch case 
//lets take an example of switch case 
const month=1//here we can change the valyue of month using loop 
//lets say we want 4th month name we enter number 4 and it will check the number entered in the month and match to case and executre the case
switch(month){
    case 1:
        console.log("January");
        break;
    case 13:
        console.log("January");
        break;
    case 2:
        console.log("January");
        break;
    case 3:
        console.log("January");
        break;
    case 1:
        console.log("January");
        break;
    case 4:
        console.log("January");
        break;
    case 5:
        console.log("January");
        break;
    case 6:
        console.log("January");
        break;
    case 7:
        console.log("January");
        break;
    case 8:
        console.log("January");
        break;
    case 9:
        console.log("January");
        break;
    case 10:
        console.log("January");
        break;
    case 11:
        console.log("January");
        break;
    case 12:
        console.log("January");
        break;
        default:
            console.log("Default is executed");
            break;
      
}
//IMP for Interview that is we don't write break after specific case is Executed then what happens 
//Ans:Ifn We don't use the break in case then default case is executed 

//we can match the string as well fro case lets see it 

const months = "march"

switch (months) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
     break;

    default:
        console.log("default case match");
     break;
}