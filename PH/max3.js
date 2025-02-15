// # Basic compare with 3 value 
const lima = 90;
const ema = 89;
const shima = 79;

if (lima > ema && lima >shima) {
    console.log("Lima is the ultimate boss");   
}
else if (ema > lima && ema >shima) {
    console.log("Ema is the ultimate boss");   
}
else {
    console.log("Shima is the ultimate boss")
}

// # compare with 3 value with function
function maxOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num3 > num1 && num3 > num2) {
        return num3;
    }
    else {
        return num2
    }
}

const maxValue = maxOfThree (30, 60, 85);
console.log("The biggest value of : " , maxValue);

// # compare with 3 value with math
const max = Math.max(37, 67, 78)
console.log("max is using Math.max : ", max);
