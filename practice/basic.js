// 1. Number Checking 
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";  
    } else {
        return "Odd"; 
    }
}

console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(7)); 

// others method of solving 
// for even number 
for (let i=0; i<=10; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    }
}
//  For odd number 
for (let i=0; i<=10; i++) {
    if (i % 2 === 1) {
        console.log(i); 
    }
}

// 2. Two Number Addition 
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 7)); 
console.log(addNumbers(10, 20));

// others 
 
let a = 10
let b = 20
let sum = a + b
console.log(sum);

let num1 = 20
let num2 = 20
console.log("The sum is : ",  num1 + num2);


// 3. Find Maximum Among Three Numbers
function findMax(a, b, c) {
    return Math.max(a, b, c); 
}

console.log(findMax(10, 25, 15)); 
console.log(findMax(5, 3, 8));

// #others 
let A = 20
let B = 10
let C = 2
if(A > B, A > C) {
    console.log("The Maximum number is : ", A);   
}
else if(B > A, B > C) {
    console.log("The Maximum number is : ", B); 
}
else {
    console.log("The Maximum number is : ", C); 
}




