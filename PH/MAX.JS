// # BASIC 
let Lima = 99;
let Ema = 80 ;

if (Lima > Ema ) {
    console.log("Lima gets the prize!");
}
else {
    console.log("Ema gets the prize!");
    
}

// # INSIDE A FUNCTION 
function getMax(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2
    }
}
const max = getMax(45, 68);
console.log("max of two is : ", max);
